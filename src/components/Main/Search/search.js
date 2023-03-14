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
import { DO_SEARCH_TUTOR_TUTOR_ACTION, DoSearchTutorTutorAction } from '../../../feature/tutor/actions'
import CLoadingIndicator from '../../Common/Animations/c_loading_indicator'
import ErrorText from '../../Common/error/error-text'
import ListTutors from '../../Tutors/ListTutors/list-tutors'
import { Dropdown } from 'react-native-material-dropdown-v2'
import Colors from '../../../res/colors'
import { View } from 'react-native'
import CChip from '../../Common/Container/c-chip'
import SizedBox from '../../Common/Container/sized-box'


const Search = () => {
    const tutorState = useSelector(state => state.tutorState)
    const dispatch = useDispatch();
    const [searchStatus, setSearchStatus] = useState(Status.idle())
    const [currentKeyword, setCurrentKeyword] = useState('')
    const [openCalendar,setOpenCalendar]=useState(false)
    const [curDate,setCurDate]=useState(new Date().toString())

    useEffect(() => {
        setSearchStatus(tutorState.status[DO_SEARCH_TUTOR_TUTOR_ACTION])
        return () => {}
    }, [tutorState])

    const themeContext = useContext(ThemeContext)
    const theme = themeContext.theme
    const [searching, setSearching] = useState(undefined)

    function search(keyword) {
        dispatch(DoSearchTutorTutorAction(keyword))
    }
    function onPressDone() {
        search(currentKeyword)
        console.log('onPressDone', searching)
    }
    const build = () => {
        var loadStatus = searchStatus.loadStatus

        return loadStatus === LoadStatus.loading ? <CLoadingIndicator /> :
            loadStatus === LoadStatus.error ? <ErrorText text={searchStatus.message} /> :
                buildTutors()
    }
    const buildTutors = () => {
        if(tutorState.searchResults.length == 0)
        return (
            <SearchGuideScreen
            title={i18n.t('not_found')}
            />
        )
        return (
            <ListTutors
                data={tutorState.searchResults}
            />
        )
    }
    const tutorTags=()=>{
        tags=new Array("tag1","tag2","tag3","tag3","tag3","tag3")
        return tags 
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

    return (
        <ScreenContainer style={Styles.fullScreen}>
            <CCard style={styles.searchBar}>
                <CSearchBar
                    onTextChange={(value) => {
                        setCurrentKeyword(value)
                    }}
                    onPressDone={onPressDone} />
                <Dropdown
                    data={[
                        {
                            "value":"Foreign tutor",
                            "code":"foreign-tutor"
                        },
                        {
                            "value":"Vietnamese tutor",
                            "code":"vietnamese-tutor"
                        },
                    ]}
                    value={"Foreign tutor"}
                    textColor={Colors.black}
                    baseColor={Colors.white}
                />
                <View style={{flexDirection:"row"}}>
                    {buildTutorTags()}
                </View>
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
