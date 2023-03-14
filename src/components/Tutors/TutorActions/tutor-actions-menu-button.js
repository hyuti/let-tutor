import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import MenuButton from '../../Common/Menu/menu-button'
import CMenuItem from '../../Common/Menu/c-menu-item'
import IconName from '../../../res/icon-name'
import i18n from '../../../res/i18n'
import { useSelector, useDispatch } from 'react-redux'
import { Status } from '../../../core/status'
import { DO_ADD_FAVOURITE_TUTOR_USER_ACTION, DoAddFavouriteTutorUserAction } from '../../../feature/user/actions'

const TutorActionsMenuButton = ({ tutorId }) => {
    const [addFavouriteStatus, setAddFavouriteStatus] = useState(Status.idle())
    const tutorState = useSelector(state => state.tutorState)
    const userState = useSelector(state => state.userState)
    const dispatch = useDispatch();
    const [favourite, setFavourite] = useState(false)

    useEffect(() => {
        setAddFavouriteStatus(userState.status[`${DO_ADD_FAVOURITE_TUTOR_USER_ACTION}${tutorId}`])
        tutorState.favouriteTutors.forEach((value) => {
            if (value.id === tutorId) setFavourite(true)
        })
        return () => {
        }
    }, [userState, tutorState])

    const onPressFavourite = () => {
        dispatch(DoAddFavouriteTutorUserAction(tutorId))
    }

    return (
        <MenuButton
            menuOptions={[
                <CMenuItem
                    title={favourite ? i18n.t('remove_favourite') : i18n.t('favourite')}
                    iconName={IconName.mdHeart}
                    onPress={
                        () => onPressFavourite()
                    }
                />,
                <CMenuItem title={i18n.t('add_to_channel')} iconName={IconName.iosRadio} />,
                <CMenuItem title={i18n.t('download')} iconName={IconName.mdCloudDownload} />,
            ]}
        />
    )
}

export default TutorActionsMenuButton

const styles = StyleSheet.create({})
