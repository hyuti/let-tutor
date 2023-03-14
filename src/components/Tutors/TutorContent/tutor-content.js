import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TutorContentItem from './TutorContentItem/tutor-content-item'
import Colors from '../../../res/colors'
import Sizes from '../../../res/sizes'
import ContentContainer from '../../Common/Screen/content-container'
import { useSelector, useDispatch } from 'react-redux'
import CSectionList from '../../Common/Container/c-section-list'
import CSectionHeader from '../../Common/Container/c-section-header'
import COpacityButton from '../../Common/Button/c-opacity-button'

const TutorContent = ({ onTapItem }) => {
    const tutorState = useSelector(state => state.tutorState)
    const tutor = tutorState.tutors[tutorState.currentTutorId]
    const sections = tutor.section ?? []
    const DATA = sections.map((section, index, array) => {
        return {
            title: section.name,
            data: section.lesson
        }
    })

    return (
        <ContentContainer style={styles.container}>
            <CSectionList
                sections={DATA}
                renderItem={({ item }) => {
                    return <COpacityButton
                        onPress={() => onTapItem(item)}>
                        <TutorContentItem
                            data={item} />
                    </COpacityButton>
                }}
                renderSectionHeader={({ section: { title, data } }) => (
                    <CSectionHeader
                        leadingText={`${title}`}
                        hasTrailing={false} />
                )}
                keyExtractor={(item, index) => item + index}>
            </CSectionList>
        </ContentContainer>
    )
}

export default TutorContent

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        padding: Sizes.s16,
    }
})
