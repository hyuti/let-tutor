import React from 'react'
import { StyleSheet, View } from 'react-native'
import CImage from '../../Common/Image/c-image'
import Sizes from '../../../res/sizes'
import FlexDirection from '../../../res/styles/flex-direction'
import SizedBox from '../../Common/Container/sized-box'
import Alignment from '../../../res/styles/alignment'
import COpacityButton from '../../Common/Button/c-opacity-button'
import SectionTutorItemInfo from '../SectionTutorsItem/section-tutor-item-info'
import TutorActionsMenuButton from '../TutorActions/tutor-actions-menu-button'
import Expanded from '../../Common/Container/expanded'
import CText from '../../Common/Text/c-text'
import TextStyles from '../../../res/styles/text-styles'
import i18n from '../../../res/i18n'
import { DateFormat } from '../../../utils/date-format'

export const MyTutorItem = ({ style, tutor, onPress }) => {
    return (
        <COpacityButton style={{ ...styles.container, ...style }} onPress={() => onPress(tutor)}>
            <CImage uri={tutor.image ?? tutor.imageUrl ?? tutor.tutorImage} style={styles.image} />
            <Expanded>
                <View>
                    <SizedBox height={Sizes.s8} />
                    <CText
                        data={tutor.tutorTitle}
                        style={TextStyles.subhead} />
                    <SizedBox height={Sizes.s4} />
                    <CText
                        data={tutor.instructorName}
                        style={TextStyles.subtitle} />
                    <SizedBox height={Sizes.s4} />
                    <CText
                        data={`${i18n.t('process')} ${tutor.process}`}
                        style={TextStyles.subtitle} />
                    <SizedBox height={Sizes.s4} />
                    <CText
                        data={`${i18n.t('latest_tearn_time')} ${DateFormat.toString(tutor.latestLearnTime)}`}
                        style={TextStyles.subtitle} />
                </View>
            </Expanded>
            <SizedBox width={Sizes.s24} style={styles.trailingIcon}>
                <TutorActionsMenuButton tutorId={tutor.id} />
            </SizedBox>
        </COpacityButton>
    )
}

const ListTutorsItem = ({ style, tutor, onPress, simple = true }) => {

    return (
        <COpacityButton style={{ ...styles.container, ...style }} onPress={() => onPress(tutor)}>
            <CImage uri={tutor.image ?? tutor.imageUrl ?? tutor.tutorImage} style={styles.image} />
            <Expanded>
                <SectionTutorItemInfo
                    simple={simple}
                    tutor={tutor} />
            </Expanded>
            <SizedBox width={Sizes.s24} style={styles.trailingIcon}>
                <TutorActionsMenuButton tutorId={tutor.id} />
            </SizedBox>
        </COpacityButton>
    )
}

export default ListTutorsItem

const styles = StyleSheet.create({
    container: {
        flexDirection: FlexDirection.row,
    },
    image: {
        height: Sizes.s68,
        width: Sizes.s84,
        margin: Sizes.s8
    },
    trailingIcon: {
        fontSize: Sizes.s20,
        alignSelf: Alignment.center
    }
})
