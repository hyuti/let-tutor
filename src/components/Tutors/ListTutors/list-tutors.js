import React, { useContext } from 'react'
import CFlatList from '../../Common/Container/c-flat-list';
import SizedBox from '../../Common/Container/sized-box';
import Sizes from '../../../res/sizes';
import TextStyles from '../../../res/styles/text-styles';
import ListTutorsItem, { MyTutorItem } from '../ListTutorsItem/list-tutors-item'
import CDivider from '../../Common/Container/c-divider';
import i18n from '../../../res/i18n';
import { TutorsContext } from '../../../provider/tutors-provider'
import { useSelector, useDispatch } from 'react-redux'
import { DoGetTutorDetailTutorAction, SetCurrentTutorIdTutorAction, SetAddContinuesLearningTutorAction } from '../../../feature/tutor/actions';
import { RootNavigation } from '../../../routes/navigations/root-navigation';
import Routes from '../../../routes/routes';

//data: list tutor ids
export const ListTutorsByIds = ({ style, headerText, hasTrailing = false, data }) => {

    const tutorState = useSelector(state => state.tutorState)

    const authState = useSelector(state => state.authState)

    const dispatch = useDispatch();


    const onPress = (tutor) => {
        dispatch(SetCurrentTutorIdTutorAction(tutor.id))
        dispatch(DoGetTutorDetailTutorAction(tutor.id, authState.userInfo.id))
        dispatch(SetAddContinuesLearningTutorAction(tutor.id))
        RootNavigation.navigate(Routes.TutorDetail, {
            tutorId: tutor.id,
        });
    }

    return (
        <CFlatList
            data={data ?? []}
            headerText={headerText}
            trailingText={i18n.t('see_all')}
            hasTrailing={hasTrailing}
            headerStyle={TextStyles.caption}
            style={style}
            horizontal={false}
            renderItem={({ item }) => {
                return <ListTutorsItem
                    tutor={tutorState.tutors[item]}
                    onPress={onPress} />;
            }}
            keyExtractor={item => item}
            ItemSeparatorComponent={() => <SizedBox height={Sizes.s4}><CDivider /></SizedBox>}
        />
    )
}

const ListTutors = ({ style, headerText, hasTrailing = false, data }) => {
    const authState = useSelector(state => state.authState)
    const dispatch = useDispatch();

    const onPress = (tutor) => {
        dispatch(SetCurrentTutorIdTutorAction(tutor.id))
        dispatch(DoGetTutorDetailTutorAction(tutor.id, authState.userInfo.id))
        dispatch(SetAddContinuesLearningTutorAction(tutor.id))
        RootNavigation.navigate(Routes.TutorDetail, {
            tutorId: tutor.id,
        });
    }

    return (
        <CFlatList
            data={data ?? []}
            headerText={headerText}
            trailingText={i18n.t('see_all')}
            hasTrailing={hasTrailing}
            headerStyle={TextStyles.caption}
            style={style}
            horizontal={false}
            renderItem={({ item }) => {
                return <ListTutorsItem
                    tutor={item}
                    onPress={onPress} />;
            }}
            keyExtractor={item => item}
            ItemSeparatorComponent={() => <SizedBox height={Sizes.s4}><CDivider /></SizedBox>}
        />
    )
}

export const ListMyTutors = ({ style, headerText, hasTrailing = false, data }) => {
    const authState = useSelector(state => state.authState)
    const dispatch = useDispatch();

    const onPress = (tutor) => {
        dispatch(SetCurrentTutorIdTutorAction(tutor.id))
        dispatch(DoGetTutorDetailTutorAction(tutor.id, authState.userInfo.id))
        dispatch(SetAddContinuesLearningTutorAction(tutor.id))
        RootNavigation.navigate(Routes.TutorDetail, {
            tutorId: tutor.id,
        });
    }

    return (
        <CFlatList
            data={data ?? []}
            headerText={headerText}
            trailingText={i18n.t('see_all')}
            hasTrailing={hasTrailing}
            headerStyle={TextStyles.caption}
            style={style}
            horizontal={false}
            renderItem={({ item }) => {
                return <MyTutorItem
                    tutor={item}
                    onPress={onPress} />;
            }}
            keyExtractor={item => item}
            ItemSeparatorComponent={() => <SizedBox height={Sizes.s4}><CDivider /></SizedBox>}
        />
    )
}
export default ListTutors

