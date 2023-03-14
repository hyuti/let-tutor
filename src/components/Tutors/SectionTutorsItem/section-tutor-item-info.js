import React from 'react'
import { StyleSheet, View } from 'react-native'
import TextStyles from '../../../res/styles/text-styles'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../res/sizes'
import Alignment from '../../../res/styles/alignment'
import FlexDirection from '../../../res/styles/flex-direction'
import CText from '../../Common/Text/c-text'
import { CRating, RatingType } from '../../Common/Rating/c-rating'
import ListAuthors from '../../Author/ListAuthors/list-authors'
import { DateFormat } from '../../../utils/date-format'
import ContentContainer from '../../Common/Screen/content-container'
import CChip from '../../Common/Container/c-chip'
import i18n from '../../../res/i18n'

const SectionTutorItemInfo = ({ tutor, simple = false, authorChip = false }) => {
    const tutorName=()=>{
        return "NameTutor"
    }
    const tutorCountry=()=>{
        return "TutorCountry"
    }
    const tutorTags=()=>{
        tags=new Array("tag1","tag2","tag3","tag3","tag3","tag3")
        return tags 
    }
    const tutorDesc=()=>{
        return "Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum"
    }
    const buildTutorTags=()=>{
        tags=tutorTags()
        return tags.map(e=>{
            return <View>
                <CChip
                    title={e} />
                <SizedBox width={Sizes.s4} />
            </View> 
        })
    }
    return (
        <ContentContainer style={styles.container}>
            <CText data={tutorName()} style={TextStyles.subhead} />
            <SizedBox height={Sizes.s2} />
            {
                !simple &&
                <View>
                    <SizedBox height={Sizes.s4} />
                    <CChip title={tutorCountry()} />
                    <SizedBox height={Sizes.s4} />
                </View>
            }

            <SizedBox height={Sizes.s2} />
            <View style={styles.row}>
                <CText data={tutorDesc()} style={TextStyles.caption} numberOfLines={3} />
                <SizedBox width={Sizes.s4} />
            </View>
            <SizedBox height={Sizes.s8} />
            {
                !simple &&
                <View style={styles.row}>
                    {buildTutorTags()}
                </View>
            }
        </ContentContainer>
    )
}

export default SectionTutorItemInfo

const styles = StyleSheet.create({
    container: {
        alignItems: Alignment.flexStart,
    },
    row: {
        flexDirection: FlexDirection.row,
        flexWrap:"wrap"
    }
})
