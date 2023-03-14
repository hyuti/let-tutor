import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import CAppBar from '../../Common/AppBar/c-app-bar'
import Styles from '../../../res/styles/styles'
import ListAuthors from '../../Author/ListAuthors/list-authors'
import Paths from '../../Content/Paths/paths'
import CScrollView from '../../Common/Container/c-scroll-view'
import SectionTutors from '../../Tutors/SectionTutors/section-tutors'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../res/sizes'
import { TutorsContext } from '../../../provider/tutors-provider'
import { PathsContext } from '../../../provider/paths-provider'
import { AuthorsContext } from '../../../provider/authors-provider'
import ScreenContainer from '../../Common/Screen/screen-container'

const SkillsDetail = ({ route }) => {

    const tutorsContext = useContext(TutorsContext)

    const pathsContext = useContext(PathsContext)

    const authorsContext = useContext(AuthorsContext)

    const pathIds = pathsContext.pathIds

    var skills = route.params.skills

    return (
        <ScreenContainer style={Styles.fullScreen}>
            <CAppBar title={skills} />
            <CScrollView style={Styles.body}>
                <Paths
                    headerText={`Paths in ${skills}`} 
                    pathIds={pathIds}/>
                <SectionTutors
                    data={tutorsContext.tutorIds.slice(20, 40)}
                    headerText={`New in ${skills}`} 
                    />
                <SectionTutors
                    data={tutorsContext.tutorIds.slice(42, 50)}
                    headerText={`Trending in ${skills}`} />
                <ListAuthors
                authorIds={authorsContext.authorIds.slice(4, 15)}
                    headerText={`Top authors in ${skills}`}
                    horizontal={true} />
                <SizedBox height={Sizes.s16}/>
            </CScrollView>
        </ScreenContainer>
    )
}

export default SkillsDetail

const styles = StyleSheet.create({})
