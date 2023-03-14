import React from 'react'
import { StyleSheet } from 'react-native'
import EmptyScreen from '../../Common/Screen/empty-screen'
import IconName from '../../../res/icon-name'

const TutorTranscript = () => {
    return (
        <EmptyScreen
            uri={IconName.iosText}
            title='No Transcript'
            subtitle='Please check again later' />
    )
}

export default TutorTranscript

const styles = StyleSheet.create({})
