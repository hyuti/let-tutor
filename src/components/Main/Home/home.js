import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Styles from '../../../res/styles/styles'
import Sizes from '../../../res/sizes'
import SizedBox from '../../Common/Container/sized-box'
import CScrollView from '../../Common/Container/c-scroll-view'
import CImageButton from '../../Common/Button/c-image-button'
import Strings from '../../../res/strings'
import CText from '../../Common/Text/c-text'
import Alignment from '../../../res/styles/alignment'
import TextStyles from '../../../res/styles/text-styles'
import Colors from '../../../res/colors'
import SectionTutors, { SectionTutorsByIds } from '../../Tutors/SectionTutors/section-tutors'
import HomeAppBar from '../../Common/AppBar/home-app-bar'
import i18n from '../../../res/i18n'
import { RootNavigation } from '../../../routes/navigations/root-navigation'
import Routes from '../../../routes/routes'
import ContentContainer from '../../Common/Screen/content-container'
import { useSelector, useDispatch } from 'react-redux'
import { DO_GET_TOP_NEW_TUTOR_ACTION, DoGetRecommendTutorTutorAction, DO_GET_RECOMMEND_TUTOR_TUTOR_ACTION, DO_GET_TOP_SELL_TUTOR_ACTION, DO_GET_TOP_RATE_TUTOR_ACTION } from '../../../feature/tutor/actions'
import { LoadStatus, Status } from '../../../core/status'
import CLoadingIndicator from '../../Common/Animations/c_loading_indicator'
import CFlatButton from '../../Common/Button/c-flat-button'
import { ActivityIndicator } from 'react-native-paper'

const Home = ({ props }) => {
    const tutorState = useSelector(state => state.tutorState)
    const dispatch = useDispatch();
    const [topNewStatus, setTopNewStatus] = useState(Status.idle())
    const [recommendTutorsStatus, setRecommendTutorsStatus] = useState(Status.idle())
    const [topSellStatus, setTopSellStatus] = useState(Status.idle())
    const [topRateStatus, setTopRateStatus] = useState(Status.idle())

    useEffect(() => {
        setTopNewStatus(tutorState.status[DO_GET_TOP_NEW_TUTOR_ACTION])
        setRecommendTutorsStatus(tutorState.status[DO_GET_RECOMMEND_TUTOR_TUTOR_ACTION])
        setTopSellStatus(tutorState.status[DO_GET_TOP_SELL_TUTOR_ACTION])
        setTopRateStatus(tutorState.status[DO_GET_TOP_RATE_TUTOR_ACTION])
        return () => {}
    }, [tutorState])
    const onNewReleasesPressed = () => {
        RootNavigation.navigate(Routes.NewReleasesScreen)
    }
    const buildSectionTutors = (title, tutorIds, loadStatus) => {
        return (
            tutorIds.length == 0 ?
                <View /> :
                loadStatus != undefined && loadStatus == LoadStatus.loading ?
                    <ActivityIndicator /> :
                    <SectionTutorsByIds
                        headerText={title}
                        tutorIds={tutorIds}
                        style={styles.sectionTutors} />
        )
    }
    const buildContinueLearning = (title, tutorIds) => {
        return (
            tutorIds.length == 0 ?
                <View /> :
                <SectionTutorsByIds
                    headerText={title}
                    tutorIds={tutorIds}
                    style={styles.sectionTutors} />
        )
    }
    return (
        <ContentContainer style={Styles.fullScreen}>
            <HomeAppBar title={i18n.t('home')} hasBack={false} />
            <CScrollView>
                <View style={Styles.screenContainer}>
                    {buildContinueLearning(i18n.t('continue_learning'), tutorState.continuesLearningIds)}
                    {buildSectionTutors(i18n.t('recommend_for_you'), tutorState.recommendTutors, recommendTutorsStatus?.loadStatus)}
                    <SizedBox height={Sizes.s12} />
                </View>
            </CScrollView>
        </ContentContainer>
    )

}

export default Home

const styles = StyleSheet.create({
    tutorsBanner: {
        height: '15%',
        justifyContent: Alignment.center,
        alignItems: Alignment.center
    },
    sectionTutors: {
        padding: Sizes.s8,
        height:260
    },
})
