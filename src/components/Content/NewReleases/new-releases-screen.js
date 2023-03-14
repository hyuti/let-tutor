import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import CAppBar from '../../Common/AppBar/c-app-bar'
import i18n from '../../../res/i18n'
import Styles from '../../../res/styles/styles'
import ListTutors, { ListTutorsByIds } from '../../Tutors/ListTutors/list-tutors'
import ScreenContainer from '../../Common/Screen/screen-container'
import { useSelector, useDispatch } from 'react-redux'
import { Status, LoadStatus } from '../../../core/status'
import { DO_GET_TOP_NEW_TUTOR_ACTION } from '../../../feature/tutor/actions'
import CLoadingIndicator from '../../Common/Animations/c_loading_indicator'

const NewReleasesScreen = () => {
    const tutorState = useSelector(state => state.tutorState)

    const dispatch = useDispatch();

    const [loadStatus, setLoadStatus] = useState(Status.idle())

    useEffect(() => {
        setLoadStatus(tutorState.status[DO_GET_TOP_NEW_TUTOR_ACTION] ?? Status.idle())
        return () => {

        }
    }, [tutorState])

    return (
        <ScreenContainer style={Styles.fullScreen}>
            <CAppBar
                //uri={Strings.defaultTutorThubnail}
                title={i18n.t('new_releases')}
            />
            <View style={Styles.screenContainer}>
                {
                    loadStatus.loading == LoadStatus.loading ? <CLoadingIndicator />
                        : <ListTutorsByIds
                            hasTrailing={false}
                            data={tutorState.topNewTutors} />
                }
            </View>
        </ScreenContainer>
    )
}

export default NewReleasesScreen

const styles = StyleSheet.create({})
