import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import CSearchBar from '../../Common/Search/c-search-bar'
import Styles from '../../../res/styles/styles'
import CCard from '../../Common/Container/c-card'
import Sizes from '../../../res/sizes'
import i18n from '../../../res/i18n'
import SearchGuideScreen from '../../Common/Search/search-guide-screen'
import ScreenContainer from '../../Common/Screen/screen-container'
import { ThemeContext } from '../../../provider/theme-provider'
import { useSelector, useDispatch } from 'react-redux'
import { Status, LoadStatus } from '../../../core/status'
import { DO_SEARCH_COURSE_COURSE_ACTION, DoSearchCourseCourseAction } from '../../../feature/course/actions'
import CLoadingIndicator from '../../Common/Animations/c_loading_indicator'
import ErrorText from '../../Common/error/error-text'
import ListCourses from '../../Courses/ListCourses/list-courses'


const Search = () => {
    const courseState = useSelector(state => state.courseState)
    const dispatch = useDispatch();
    const [searchStatus, setSearchStatus] = useState(Status.idle())
    const [currentKeyword, setCurrentKeyword] = useState('')

    useEffect(() => {
        setSearchStatus(courseState.status[DO_SEARCH_COURSE_COURSE_ACTION])
        return () => {}
    }, [courseState])

    const themeContext = useContext(ThemeContext)
    const theme = themeContext.theme
    const [searching, setSearching] = useState(undefined)

    function search(keyword) {
        dispatch(DoSearchCourseCourseAction(keyword))
    }
    function onPressDone() {
        search(currentKeyword)
        console.log('onPressDone', searching)
    }
    const build = () => {
        var loadStatus = searchStatus.loadStatus

        return loadStatus === LoadStatus.loading ? <CLoadingIndicator /> :
            loadStatus === LoadStatus.error ? <ErrorText text={searchStatus.message} /> :
                buildCourses()
    }
    const buildCourses = () => {
        if(courseState.searchResults.length == 0)
        return (
            <SearchGuideScreen
            title={i18n.t('not_found')}
            />
        )
        return (
            <ListCourses
                data={courseState.searchResults}
            />
        )
    }

    return (
        <ScreenContainer style={Styles.fullScreen}>
            <CCard style={styles.searchBar}>
                <CSearchBar
                    onTextChange={(value) => {
                        setCurrentKeyword(value)
                    }}
                    onPressDone={onPressDone} />
            </CCard>
            {build()}
            {/* {searching == undefined ? buildInit() : (searching === true ? buildSuggestion() : buildResult())} */}
        </ScreenContainer>
    )
}

export default Search

const styles = StyleSheet.create({
    searchBar: {
        borderRadius: Sizes.s0,
    },
    suggestion: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderWidth: 1
    }
})
