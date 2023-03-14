import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import CIconButton from '../../Common/Button/c-icon-button'
import Colors from '../../../res/colors'
import Alignment from '../../../res/styles/alignment'
import Sizes from '../../../res/sizes'
import TextStyles from '../../../res/styles/text-styles'
import FlexDirection from '../../../res/styles/flex-direction'
import IconName from '../../../res/icon-name'
import i18n from '../../../res/i18n'
import { useSelector, useDispatch } from 'react-redux'
import { DoAddFavouriteTutorUserAction, DO_ADD_FAVOURITE_TUTOR_USER_ACTION } from '../../../feature/user/actions'
import { Status, LoadStatus } from '../../../core/status'
import { DoGetFreeTutorTutorAction } from '../../../feature/tutor/actions'

const Item = ({ bottomText, icon, onPress }) => {
    return (
        <CIconButton
            onPress={onPress}
            containerStyle={styles.actionButton}
            size={Sizes.s32}
            icon={icon}
            bottomText={bottomText}
            bottomTextStyle={styles.actionButtonText} />
    )
}

const TutorActions = ({ style, tutorId }) => {
    const [addFavouriteStatus, setAddFavouriteStatus] = useState(Status.idle())
    const tutorState = useSelector(state => state.tutorState)
    const userState = useSelector(state => state.userState)
    const dispatch = useDispatch();
    const [favourite, setFavourite] = useState(false)
    const myTutors = tutorState.myTutors
    const [alreadyBuy, setAlreadyBuy] = useState(false)
    useEffect(() => {
        setAddFavouriteStatus(userState.status[`${DO_ADD_FAVOURITE_TUTOR_USER_ACTION}${tutorId}`])
        tutorState.favouriteTutors.forEach((value) => {
            if (value.id === tutorId) setFavourite(true)
        })
        return () => {}
    }, [userState, tutorState])

    useEffect(() => {
        const buyStatus = Object.keys(myTutors).includes(tutorId)
        setAlreadyBuy(buyStatus)
        return () => {

        }
    }, [myTutors])

    const onPressFavourite = () => {
        dispatch(DoAddFavouriteTutorUserAction(tutorId))
    }

    const onPressGet = () => {
        if (!alreadyBuy)
            dispatch(DoGetFreeTutorTutorAction(tutorId))
    }

    return (
        <View style={{ ...styles.container, ...style }}>
            <Item
                icon={IconName.mdHeart}
                bottomText={addFavouriteStatus?.loadStatus === LoadStatus.loading ? i18n.t('loading') : favourite ? i18n.t('remove_favourite') : i18n.t('add_favourite')}
                onPress={() => onPressFavourite()} />
            <Item
                icon={IconName.iosRadio}
                bottomText={alreadyBuy ? "Book" : "Booked"}
                onPress={onPressGet} />
        </View>
    )
}

export default TutorActions

const styles = StyleSheet.create({
    container: {
        flexDirection: FlexDirection.row,
        justifyContent: Alignment.spaceBetween,
        alignItems: Alignment.center,
    },

    actionButton: {
        backgroundColor: Colors.grey200,
        alignSelf: Alignment.baseLine,
        width: Sizes.s48,
        height: Sizes.s48,
        borderRadius: Sizes.s24,
        padding: Sizes.s4,
        justifyContent: Alignment.center,
    },
    actionButtonText: {
        ...TextStyles.body1,
        color: Colors.black,
    }
})
