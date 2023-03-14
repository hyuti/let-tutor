import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import EmptyScreen from '../Common/Screen/empty-screen'
import IconName from '../../res/icon-name'
import i18n from '../../res/i18n'
import Sizes from '../../res/sizes'
import { useSelector, useDispatch } from 'react-redux'
import { Status, LoadStatus } from '../../core/status'
import { DO_GET_FAVOURITES_TUTOR_ACTION } from '../../feature/tutor/actions'
import CLoadingIndicator from '../Common/Animations/c_loading_indicator'
import { FavouriteTutorList } from '../Tutors/ListTutorsItem/favourite_tutor_item'
import ScreenContainer from '../Common/Screen/screen-container'

const Content = ({ data }) => {
    if (data.length == 0)
        return (
            <EmptyScreen
                uri={IconName.mdHeart}
                title={i18n.t('no_favourites')}
                subtitle={i18n.t('everything_you_add_to_favourites_will_appear_here')} />
        )
    else return (
        <FavouriteTutorList
            tutors={data}
        />
    )
}

const Favourites = () => {
    const tutorState = useSelector(state => state.tutorState)
    const dispatch = useDispatch();
    const [getFavouriteStatus, setGetFavouriteStatus] = useState(Status.idle())
    useEffect(() => {
        setGetFavouriteStatus(tutorState.status[DO_GET_FAVOURITES_TUTOR_ACTION])
        return () => {
            //cleanup
        }
    }, [tutorState])
    return (
        <ScreenContainer style={{paddingHorizontal: Sizes.s8, paddingVertical: Sizes.s16}}
        //style={{ backgroundColor: Colors.white, height: '100%' , paddingHorizontal: Sizes.s8, paddingVertical: Sizes.s16}}
        >
            {
                getFavouriteStatus.loadStatus == LoadStatus.loading
                    ? <CLoadingIndicator /> : <Content data={tutorState.favouriteTutors} />
            }
        </ScreenContainer>
    )
}

export default Favourites

