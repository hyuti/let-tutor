import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import CText from '../../Common/Text/c-text'
import { ListMyTutors } from '../../Tutors/ListTutors/list-tutors'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../res/sizes'
import Colors from '../../../res/colors'
import ScreenContainer from '../../Common/Screen/screen-container'

export default function MyTutorsTab() {
    const tutorState = useSelector(state => state.tutorState)

    return (
        <ScreenContainer style={{paddingHorizontal: Sizes.s8, paddingVertical: Sizes.s4}} >
            <SizedBox height={Sizes.s16} />
            <ListMyTutors
                style={{ height: '100%' }}
                data={Object.values(tutorState.myTutors)} />
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({})
