import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import ImageAppBar from '../../Common/AppBar/image-appbar'
import Strings from '../../../res/strings'
import i18n from '../../../res/i18n'
import Styles from '../../../res/styles/styles'
import ListTutors, { ListTutorsByIds } from '../../Tutors/ListTutors/list-tutors'
import ScreenContainer from '../../Common/Screen/screen-container'
import { useSelector, useDispatch } from 'react-redux'
import CAppBar from '../../Common/AppBar/c-app-bar'
import { Status, LoadStatus } from '../../../core/status'
import { DO_GET_RECOMMEND_TUTOR_TUTOR_ACTION } from '../../../feature/tutor/actions'
import CLoadingIndicator from '../../Common/Animations/c_loading_indicator'

const RecommendedForYouScreen = () => {
    const tutorState = useSelector(state => state.tutorState)

    const dispatch = useDispatch();

    const [loadStatus, setLoadStatus] = useState(Status.idle())

    useEffect(() => {
        setLoadStatus(tutorState.status[DO_GET_RECOMMEND_TUTOR_TUTOR_ACTION] ?? Status.idle())
        return () => {

        }
    }, [tutorState])

    return (
        <ScreenContainer style={Styles.fullScreen}>
            <CAppBar
                //uri={Strings.defaultTutorThubnail}
                title={i18n.t('recommended_for_you')}
            />
            <View style={Styles.screenContainer}>
                {
                    loadStatus.loading == LoadStatus.loading ? <CLoadingIndicator />
                        : <ListTutorsByIds
                            hasTrailing={false}
                            data={tutorState.recommendTutors} />
                }
            </View>
        </ScreenContainer>
    )
}

export default RecommendedForYouScreen

const styles = StyleSheet.create({})
