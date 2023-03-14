import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import CAppBar from '../../Common/AppBar/c-app-bar'
import Styles from '../../../res/styles/styles'
import ListAuthors from '../../Author/ListAuthors/list-authors'
import Paths from '../../Content/Paths/paths'
import CScrollView from '../../Common/Container/c-scroll-view'
import SectionTutors, { SectionTutorsByIds } from '../../Tutors/SectionTutors/section-tutors'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../res/sizes'
import { PathsContext } from '../../../provider/paths-provider'
import { AuthorsContext } from '../../../provider/authors-provider'
import ScreenContainer from '../../Common/Screen/screen-container'
import { DO_GET_TUTOR_BY_CATEGORY_TUTOR_ACTION, DoGetTutorByCategoryTutorAction } from '../../../feature/tutor/actions'
import { Status, LoadStatus } from '../../../core/status'
import { ActivityIndicator } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'
import CFlatButton from '../../Common/Button/c-flat-button'
import ListTutors from '../../Tutors/ListTutors/list-tutors'
import CLoadingIndicator from '../../Common/Animations/c_loading_indicator'

const CategoryDetailScreen = ({ route }) => {

    const pathsContext = useContext(PathsContext)

    const authorsContext = useContext(AuthorsContext)

    const pathIds = pathsContext.pathIds

    var categoryId = route.params.categoryId

    const tutorState = useSelector(state => state.tutorState)

    var category = tutorState.categories[categoryId].name


    const dispatch = useDispatch();

    const [loadTutorStatus, setloadTutorStatus] = useState(Status.idle())

    useEffect(() => {

        setloadTutorStatus(tutorState.status[DO_GET_TUTOR_BY_CATEGORY_TUTOR_ACTION])

        return () => {
            //cleanup
        }
    }, [tutorState])

    return (
        <ScreenContainer style={Styles.fullScreen}>
            <CAppBar title={category} />
            {
                loadTutorStatus.loadStatus == LoadStatus.loading ? <CLoadingIndicator /> :
                    <ListTutors
                        //headerText={`Tutors in ${category}`}
                        style={{padding: Sizes.s12}}
                        data={tutorState.tutorsByCategory[categoryId]}
                    />
            }
        </ScreenContainer>
    )
}

export default CategoryDetailScreen

const styles = StyleSheet.create({})
