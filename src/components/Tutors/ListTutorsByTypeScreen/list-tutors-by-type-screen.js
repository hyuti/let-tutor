import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import Styles from '../../../res/styles/styles'
import CAppBar from '../../Common/AppBar/c-app-bar'
import CText from '../../Common/Text/c-text'
import TextStyles from '../../../res/styles/text-styles'
import { ListTutorsByIds } from '../ListTutors/list-tutors'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../res/sizes'
import { ScreenContainer } from 'react-native-screens'
import ContentContainer from '../../Common/Screen/content-container'

const ListTutorsByTypeScreen = ({ route }) => {
    const params = route.params
    return (
        <ScreenContainer style={Styles.fullScreen}>
            <CAppBar />
            <ContentContainer style={Styles.screenContainer}>
                <CText data={params.title} style={TextStyles.headline} />
                <SizedBox height={Sizes.s16} />
                <ListTutorsByIds
                    hasTrailing={false}
                    data={params.tutorIds} />
            </ContentContainer>
        </ScreenContainer>
    )
}

export default ListTutorsByTypeScreen

const styles = StyleSheet.create({})
