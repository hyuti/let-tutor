import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import Styles from '../../../res/styles/styles'
import CYoutubeVideoView from '../../Common/Video/youtube-video-view'
import Sizes from '../../../res/sizes'
import CScrollView from '../../Common/Container/c-scroll-view'
import SizedBox from '../../Common/Container/sized-box'
import Alignment from '../../../res/styles/alignment'
import SectionTutorItemInfo from '../SectionTutorsItem/section-tutor-item-info'
import CAppBar from '../../Common/AppBar/c-app-bar'
import ListAuthors from '../../Author/ListAuthors/list-authors'
import CIonIcon from '../../Common/Icon/c-ion-icon'
import IconName from '../../../res/icon-name'
import TutorActions from '../TutorActions/tutor-actions'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TutorContent from '../TutorContent/tutor-content'
import TutorTranscript from '../TutorTranscript/tutor-transcript'
import Routes from '../../../routes/routes'
import { ShareUtils } from '../../../utils/share-utils'
import CButton from '../../Common/Button/c-button'
import Colors from '../../../res/colors'
import CText from '../../Common/Text/c-text'
import i18n from '../../../res/i18n'
import ScreenContainer from '../../Common/Screen/screen-container'
import { ThemeContext } from '../../../provider/theme-provider'
import { useSelector, useDispatch } from 'react-redux'
import { Status, LoadStatus } from '../../../core/status'
import CLoadingIndicator from '../../Common/Animations/c_loading_indicator'
import { DO_GET_TUTOR_DETAIL_TUTOR_ACTION, DoGetMyTutorsTutorAction, DoGetTutorLessonVideoTutorAction, DO_GET_TUTOR_LESSON_VIDEO_TUTOR_ACTION } from '../../../feature/tutor/actions'
import ErrorText from '../../Common/error/error-text'
import ErrorBack from '../../Common/error/error_back'
import InstructorChipItem from '../../Author/instructor_chip_item'
import TextStyles from '../../../res/styles/text-styles'
import { DateFormat } from '../../../utils/date-format'
import CExpoVideoView from '../../Common/Video/expo-video-view'
import CImage from '../../Common/Image/c-image'
import Strings from '../../../res/strings'
import TutorRatingTab from '../TutorContent/tutor-rating-screen'
import { CRating, AirRating } from '../../Common/Rating/c-rating'
import CChip from '../../Common/Container/c-chip'
import SectionTutors from '../SectionTutors/section-tutors'
import { ActivityIndicator } from 'react-native-paper'

const Tab = createMaterialTopTabNavigator()

const TutorDetail = ({ route, navigator }) => {
    var tutorId = route.params.tutorId
    const tutorState = useSelector(state => state.tutorState)
    var allTutors = tutorState.tutors;
    const tutor = allTutors[tutorId]
    const [currentVideoUri, setCurrentVideoUri] = useState(tutor?.promoVidUrl ?? '')
    const dispatch = useDispatch();
    const [status, setStatus] = useState(Status.idle())
    const [getVideoUrl, setGetVideoUrl] = useState(Status.idle())
    useEffect(() => {
        console.log(tutorState.status[`${DO_GET_TUTOR_DETAIL_TUTOR_ACTION}${tutorId}`])
        setStatus(tutorState.status[`${DO_GET_TUTOR_DETAIL_TUTOR_ACTION}${tutorId}`])
        setGetVideoUrl(tutorState.status[`${DO_GET_TUTOR_LESSON_VIDEO_TUTOR_ACTION}`])
        return () => {
            //dispatch(DoGetMyTutorsTutorAction())
        }
    }, [tutorState])
    const themeContext = useContext(ThemeContext)
    const theme = themeContext.theme
    const onShare = (tutor) => {
        ShareUtils.share({ message: tutor.title })
    }
    const onTapLessonItem = (lesson) => {
        setCurrentVideoUri(lesson.videoUrl)
        if (lesson.videoName?.includes('.mp4') || lesson.videoName?.includes('.mov')) {
            dispatch(DoGetTutorLessonVideoTutorAction(tutor.id, lesson.id))
        }
    }
    const tutorName=()=>{
        return "NameTutor"
    }
    const tutorCountry=()=>{
        return "CountryTutor"
    }
    const tutorTags=()=>{
        tags=new Array("tag1","tag2","tag3","tag3","tag3","tag3")
        return tags 
    }
    const tutorDesc=()=>{
        return "Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum"
    }
    const tutorInterests=()=>{
        return "Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum"
    }
    const tutorExperience=()=>{
        return "Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum"
    }
    const buildTutorTags=()=>{
        tags=tutorTags()
        return tags.map(e=>{
            return <View>
                <CChip
                    title={e} />
                <SizedBox width={Sizes.s8} />
            </View> 
        })
    }
    const TutorOverview = () => {
        var instructor = tutor.instructor;
        const stars = tutor?.ratings?.stars ?? [];
        var totalScore = 0.0;
        var totalPeople = 0;
        var averageScore = 0.0;
        stars.forEach((peoplesInt, index) => {
            totalScore += peoplesInt * (index + 1)
            totalPeople += peoplesInt
        })
        if (stars.length > 0) {
            averageScore = totalScore / totalPeople;
        }
        return (
            <ScreenContainer>
                <CScrollView
                    style={Styles.screenContainer}>
                    <SizedBox height={Sizes.s10} />
                    <CText data={tutorName()} style={TextStyles.tutorName} />
                    <SizedBox height={Sizes.s10} />
                    <View style={Styles.row}>
                        <AirRating
                            showRating={true}
                            ratingCount={averageScore} />
                        <View style={{ padding: Sizes.s12 }}>
                            <CText
                                data={`${i18n.t('rated_by')} ${totalPeople} ${i18n.t('peoples')}`} />
                            <SizedBox height={Sizes.s6} />
                            <CChip title={tutorCountry()} />
                            <SizedBox height={Sizes.s6} />
                        </View>
                    </View>
                    <SizedBox height={Sizes.s18} />
                    {
                        instructor != undefined ?? <InstructorChipItem
                            id={instructor['id'] ?? ''}
                            name={instructor['name'] ?? ''}
                            avatar={instructor['avatar'] ?? ''}
                        />
                    }
                    <SizedBox width={Sizes.s4} />
                    <SizedBox height={Sizes.s12} />
                    <View style={Styles.row}>
                        {buildTutorTags()}
                    </View>
                    <SizedBox height={Sizes.s12} />

                    <CText
                        style={TextStyles.title}
                        data={"Description"} />
                    <SizedBox height={Sizes.s4} />
                    <CText>{tutorDesc()}</CText>
                    <SizedBox height={Sizes.s12} />

                    <CText
                        style={TextStyles.title}
                        data={"Interests"} />
                    <SizedBox height={Sizes.s4} />
                    <CText>{tutorInterests()}</CText>
                    <SizedBox height={Sizes.s8} />

                    <CText
                        style={TextStyles.title}
                        data={"Teaching experience"} />
                    <SizedBox height={Sizes.s4} />
                    <CText>{tutorExperience()}</CText>
                    <SizedBox height={Sizes.s8} />

                    <TutorActions
                        tutorId={tutor.id ?? ''}
                        style={styles.tutorActions} />
                    <SizedBox height={Sizes.s8} />
                    <CText data={tutor.description} />
                    <SizedBox height={Sizes.s12} />

                    <SizedBox height={Sizes.s100} />
                </CScrollView>
            </ScreenContainer>
        )
    }

    const buildVideoView = () => {
        const isExposedVideoFile = currentVideoUri != undefined && (currentVideoUri.endsWith('.mp4') || currentVideoUri.includes('.mov'))
        const isYoutubeVideo = currentVideoUri != undefined && currentVideoUri.includes('https://youtube')

        if (isExposedVideoFile) {
            const loadStatus = getVideoUrl?.loadStatus ?? LoadStatus.loading
            return loadStatus == LoadStatus.loading ? <ActivityIndicator /> : loadStatus == LoadStatus.success ? <CExpoVideoView
                uri={tutorState.videoUrl} /> : <View />
        }

        if (isYoutubeVideo) {
            var splited = currentVideoUri.split('/')
            var youtubeVideoId = splited[splited.length - 1]
            return <CYoutubeVideoView
                videoId={youtubeVideoId}
                style={styles.videoView} />
        }

        return <CImage
            uri={Strings.noVideoImage}
            height={200}
        />

    }

    const build = () => {
        return (
            <View style={{ height: '100%' }}>
                {buildVideoView()}
                <Tab.Navigator
                    tabBarOptions={{
                        contentContainerStyle: { backgroundColor: theme.tabColor },
                        activeTintColor: theme.textColor,
                        inactiveTintColor: theme.textColor,
                    }}>
                    <Tab.Screen
                        name={Routes.TutorTranscript}
                        component={TutorOverview}
                        options={{ title: i18n.t('overview') }} />
                    <Tab.Screen
                        name={Routes.TutorContent}
                        children={() => <TutorContent onTapItem={onTapLessonItem} />}
                        options={{ title: "Schedule" }} />
                </Tab.Navigator>
            </View>
        )
    }

    const loadStatus = status?.loadStatus ?? LoadStatus.idle;

    return (
        <ScreenContainer style={{ ...Styles.fullScreen, }}>
            <View style={{ height: '100%' }}>
                <CAppBar
                    title={tutor.title}
                    trailing={
                        <CIonIcon
                            name={IconName.mdShare}
                            onPress={() => onShare(tutor)} />}
                />
                {
                    loadStatus == LoadStatus.loading ? <CLoadingIndicator />
                        : loadStatus == LoadStatus.error ? <ErrorBack text={status.message} />
                            : build()
                }
            </View>
        </ScreenContainer>
    )
}

export default TutorDetail

const styles = StyleSheet.create({
    videoView: {
        height: '30%',
        width: '100%',
    },
    teacherAvatar: {
        alignSelf: Alignment.baseLine
    },
    tutorActions: {
        paddingHorizontal: Sizes.s12,
        paddingVertical: Sizes.s12
    }
})
