import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import CText from '../utils/text/cText'
import CFromTextInput from '../utils/textField/cFormTextInput'
import Colors from '../../utils/color'
import Alignment from '../../utils/alignment'
import Sizes from '../../utils/size'
import CButton from '../utils/button/cButton'
import SizedBox from '../utils/container/sizedBox'
import FontWeight from '../../utils/fontWeight'
import Styles from '../../utils/style'
import CScrollView from '../utils/container/cScrollView'
import Routes from '../../routes/routes'
import { RootNavigation } from '../../routes/nav/rootNav'
import i18n from '../../utils/i18n'
import ScreenContainer from '../utils/screen/screenContainer'
import ErrorText from '../utils/error/errorText'
import { useSelector, useDispatch } from 'react-redux'
import { DoLoginAuthAction, AuthAction, SetStatusAuthAction } from '../../features/auth/actions'
import { LoadStatus, Status } from '../../utils/status'

const LogIn = (props) => {
    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const [error, setError] = useState('')

    const authState = useSelector(state => state.authState)

    const dispatch = useDispatch();

    const [loginStatus, setLoginStatus] = useState(Status.idle())

    useEffect(() => {
        setLoginStatus(authState.status[AuthAction.DoLoginAuthAction]);
    }, [authState])

    useEffect(() => {
        switch (loginStatus.loadStatus) {
            case LoadStatus.loading:
                break;
            case LoadStatus.error:
                setError(i18n.t('wrong_username_password_or_account_not_active'))
                break;
            case LoadStatus.success:
                RootNavigation.replace(Routes.Main);
                dispatch(SetStatusAuthAction(AuthAction.DoLogoutAuthAction, Status.idle()))
                break;
            default:
        }
        return () => {

        }
    }, [loginStatus])


    const onPressedSignIn = () => {
        if (username.length === 0 || password.length === 0) {
            setError(i18n.t('please_fill_inforamtion'))
        } if (password.length < 8) {
            setError(i18n.t('password_atless_x_char').replace('%s', '8'))
        } else {
            dispatch(DoLoginAuthAction(username, password))
        }
    }

    return (
        <ScreenContainer>
            <CScrollView contentContainerStyle={Styles.screenContainer} >
                <View style={Styles.screenColumn}>
                    <SizedBox height={'25%'} />
                    <CText data={i18n.t('sign_in')} style={styles.label} />
                    <SizedBox height={Sizes.s70} />

                    <CFromTextInput
                        initValue={''}
                        label={i18n.t('email')}
                        placeholder={i18n.t('your_email_address')}
                        style={styles.input}
                        onChangeText={(value) => {
                            if (error.length > 0) {
                                setError('')
                            }
                            setUsername(value)
                        }}
                        showErrorText={false}
                        error={error}>
                       
                    </CFromTextInput>

                    <CFromTextInput
                        initValue={''}
                        label={i18n.t('password')}
                        placeholder={i18n.t('atless_x_char').replace('%s', 6)}
                        style={styles.input} 
                        secureTextEntry={true}
                        onChangeText={(value) => {
                            if (error.length > 0) {
                                setError('')
                            }
                            setPassword(value)
                        }}
                        showErrorText={false}
                        error={error}>
                    </CFromTextInput>

                    {error.length > 0 && <ErrorText>{error}</ErrorText>}
                    <SizedBox height={Sizes.s16} />

                    <CButton
                        title={i18n.t('sign_in').toUpperCase()}
                        onPress={onPressedSignIn}
                        type='solid'
                        style={styles.signIn}
                        loading={loginStatus.loadStatus === LoadStatus.loading}
                        disabled={false} />
                    <SizedBox height={Sizes.s12} />
                    <SizedBox height={Sizes.s24} />
                </View>
            </CScrollView>
        </ScreenContainer>
    )
}

export default LogIn

const styles = StyleSheet.create({
    label: {
        alignSelf: Alignment.center,
        fontSize: Sizes.s34,
        fontWeight: FontWeight.bold,
    },
    input: {
    },
    signIn: {
        backgroundColor: Colors.green,
    },
    signUp: {

    },
    forgotPassword: {

    },
})