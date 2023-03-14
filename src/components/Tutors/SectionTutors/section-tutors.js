import React, { useContext } from 'react'
import SectionTutorItem from '../SectionTutorsItem/section-tutors-item';
import CFlatList from '../../Common/Container/c-flat-list';
import SizedBox from '../../Common/Container/sized-box';
import Sizes from '../../../res/sizes';
import Routes from '../../../routes/routes';
import { RootNavigation } from '../../../routes/navigations/root-navigation';
import i18n from '../../../res/i18n';
import { useSelector, useDispatch } from 'react-redux'
import { DoGetTutorDetailTutorAction, SetCurrentTutorIdTutorAction, SetAddContinuesLearningTutorAction } from '../../../feature/tutor/actions';

export const SectionTutorsByIds = ({ style, headerText, tutorIds }) => {
    const authState = useSelector(state => state.authState)
    const tutorState = useSelector(state => state.tutorState)
    var allTutors = tutorState.tutors;
    const dispatch = useDispatch();
    const onTrailingPressed = () => {
        RootNavigation.navigate(Routes.ListTutorsByTypeScreen, {
            title: headerText,
            tutorIds: tutorIds,
        })
    }

    return (
        <CFlatList
            headerText={headerText}
            style={style}
            horizontal={true}
            data={tutorIds}
            renderItem={({ item }) => {
                var tutor = allTutors[item]
                return <SectionTutorItem
                    key={tutor.id}
                    tutor={tutor}
                    onPress={() => {
                        dispatch(SetCurrentTutorIdTutorAction(tutor.id))
                        dispatch(DoGetTutorDetailTutorAction(tutor.id, authState.userInfo.id))
                        dispatch(SetAddContinuesLearningTutorAction(tutor.id))
                        RootNavigation.navigate(Routes.TutorDetail, {
                            tutorId: tutor.id
                        })
                    }}
                />
            }
            }
            keyExtractor={item => item}
            ItemSeparatorComponent={() => <SizedBox width={Sizes.s12} />}
            trailingText={i18n.t('see_all')}
            onTrailingPress={onTrailingPressed} />
    )
}

const SectionTutors = ({ style, headerText, data , hasTrailing  = true}) => {
    const authState = useSelector(state => state.authState)
    
    const dispatch = useDispatch();

    const onTrailingPressed = () => {
        RootNavigation.navigate(Routes.ListTutorsByTypeScreen, {
            title: headerText,
            tutorIds: data,
        })
    }

    return (
        <CFlatList
            headerText={headerText}
            style={style}
            horizontal={true}
            data={data}
            renderItem={({ item }) => {
                var tutor = item
                return <SectionTutorItem
                    key={tutor.id}
                    tutor={tutor}
                    onPress={() => {
                        dispatch(SetCurrentTutorIdTutorAction(tutor.id))

                        dispatch(DoGetTutorDetailTutorAction(tutor.id, authState.userInfo.id))

                        dispatch(SetAddContinuesLearningTutorAction(tutor.id))
                        
                        RootNavigation.navigate(Routes.TutorDetail, {
                            tutorId: tutor.id
                        })
                    }}
                />
            }
            }
            keyExtractor={item => item}
            ItemSeparatorComponent={() => <SizedBox width={Sizes.s12} />}
            trailingText={i18n.t('see_all')}
            hasTrailing={hasTrailing}
            onTrailingPress={onTrailingPressed} />
    )
}

export default SectionTutors
