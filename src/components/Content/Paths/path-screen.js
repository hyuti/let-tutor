import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import CAppBar from '../../Common/AppBar/c-app-bar'
import Styles from '../../../res/styles/styles'
import CImage from '../../Common/Image/c-image'
import Strings from '../../../res/strings'
import Sizes from '../../../res/sizes'
import ListTileText from '../../Common/Container/list-tile-text'
import i18n from '../../../res/i18n'
import CText from '../../Common/Text/c-text'
import TextStyles from '../../../res/styles/text-styles'
import SizedBox from '../../Common/Container/sized-box'
import CSectionList from '../../Common/Container/c-section-list'
import CSectionHeader from '../../Common/Container/c-section-header'
import ListTutorsItem from '../../Tutors/ListTutorsItem/list-tutors-item'
import { TutorsContext } from '../../../provider/tutors-provider'
import ScreenContainer from '../../Common/Screen/screen-container'
import ContentContainer from '../../Common/Screen/content-container'

const PathScreen = ({ route }) => {
    const path = route.params.path

    const tutorsContext = useContext(TutorsContext)

    const allTutorIds = tutorsContext.tutorIds


    const DATA = [
        {
            title: i18n.t('beginner'),
            data: allTutorIds.slice(0, 10),
        },
        {
            title: i18n.t('intermediate'),
            data: allTutorIds.slice(11, 20),
        },
        {
            title: i18n.t('advanced'),
            data: allTutorIds.slice(22, 30),
        },
    ]

    return (
        <ScreenContainer>
            <CAppBar title={path.name} />
            <ContentContainer style={Styles.screenContainer}>
                <ListTileText
                    leading={<CImage uri={Strings.defaultTutorThubnail} width={Sizes.s68} height={Sizes.s68} />}
                    title={path.name}
                    subtitle={`${path.tutorIds.length} ${i18n.t('tutors')} - ${path.tutorsTime} ${i18n.t('hours')}`} />
                <SizedBox height={Sizes.s12} />
                <CText>
                    {path.introduce}
                </CText>
                <CText style={styles.yourProgress}>
                    {`${i18n.t('your_progress')}: ${path.progress}%`}
                </CText>
                <CSectionList
                    sections={DATA}
                    renderItem={({ item }) => {
                        const tutor = tutorsContext.tutors.get(item)
                        return <ListTutorsItem tutor={tutor} />
                    }}
                    renderSectionHeader={({ section: { title, data } }) => (
                        <CSectionHeader
                            leadingText={title}
                            hasTrailing={false} />
                    )}
                    keyExtractor={(item, index) => item + index}>
                </CSectionList>
            </ContentContainer>
        </ScreenContainer>
    )
}

export default PathScreen

const styles = StyleSheet.create({
    yourProgress: {
        ...TextStyles.title,
        paddingVertical: Sizes.s12,
    }
})
