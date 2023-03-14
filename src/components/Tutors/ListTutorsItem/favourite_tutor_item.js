import React from 'react'
import { StyleSheet, View } from 'react-native'
import CImage from '../../Common/Image/c-image'
import Sizes from '../../../res/sizes'
import FlexDirection from '../../../res/styles/flex-direction'
import SizedBox from '../../Common/Container/sized-box'
import Alignment from '../../../res/styles/alignment'
import COpacityButton from '../../Common/Button/c-opacity-button'
import Routes from '../../../routes/routes'
import TutorActionsMenuButton from '../TutorActions/tutor-actions-menu-button'
import { RootNavigation } from '../../../routes/navigations/root-navigation'
import TextStyles from '../../../res/styles/text-styles'
import i18n from '../../../res/i18n'
import CFlatList from '../../Common/Container/c-flat-list'
import CText from '../../Common/Text/c-text'
import CDivider from '../../Common/Container/c-divider'
import Expanded from '../../Common/Container/expanded'
import { useDispatch, useSelector } from 'react-redux'
import { SetCurrentTutorIdTutorAction, DoGetTutorDetailTutorAction, SetAddContinuesLearningTutorAction } from '../../../feature/tutor/actions'

export const FavouriteTutorList = ({ tutors }) => {
    return (
        <CFlatList
            data={tutors ?? []}
            hasTrailing={false}
            headerStyle={TextStyles.caption}
            horizontal={false}
            renderItem={({ item }) => {
                return <FavouriteTutorsItem tutor={item} />;
            }}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <SizedBox height={Sizes.s4}><CDivider /></SizedBox>}
            contentContainerStyle={{ height: '100%' }}
        />
    )
}

const FavouriteTutorsItem = ({ style, tutor }) => {
    const dispatch =  useDispatch()
    const authState = useSelector(state => state.authState)
 
    const onPress = (tutor) => {
        dispatch(SetCurrentTutorIdTutorAction(tutor.id))
        dispatch(DoGetTutorDetailTutorAction(tutor.id, authState.userInfo.id))
        dispatch(SetAddContinuesLearningTutorAction(tutor.id))
        RootNavigation.navigate(Routes.TutorDetail, {
            tutorId: tutor.id,
        });
    }

    return (
        <COpacityButton style={{ ...styles.container, ...style }} onPress={() => onPress(tutor)}>
            <CImage uri={tutor.tutorImage} style={styles.image} />
            <Expanded>
                <View >
                    <CText data={tutor.tutorTitle} style={TextStyles.subhead} />
                    <CText data={`${i18n.t('price')}  ${tutor.tutorPrice}`} style={TextStyles.subhead} />
                    <CText data={`${i18n.t('instructor')} ${tutor.instructorName}`} style={TextStyles.subhead} />
                </View>
            </Expanded>
            {/* <SectionTutorItemInfo tutor={tutor} /> */}
            <SizedBox width={Sizes.s24} style={styles.trailingIcon}>
                <TutorActionsMenuButton tutorId={tutor.id} />
            </SizedBox>
        </COpacityButton>
    )
}

export default FavouriteTutorsItem

const styles = StyleSheet.create({
    container: {
        flexDirection: FlexDirection.row,
    },
    image: {
        height: Sizes.s68,
        width: Sizes.s84,
        margin: Sizes.s8
    },
    trailingIcon: {
        fontSize: Sizes.s20,
        alignSelf: Alignment.center
    }
})
