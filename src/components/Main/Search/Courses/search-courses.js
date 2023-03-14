import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CText from '../../../Common/Text/c-text'
import Styles from '../../../../res/styles/styles'
import ListTutors from '../../../Tutors/ListTutors/list-tutors'
import SizedBox from '../../../Common/Container/sized-box'
import Sizes from '../../../../res/sizes'
import i18n from '../../../../res/i18n'
import ContentContainer from '../../../Common/Screen/content-container'

const SearchTutors = ({ tutorIds }) => {
    return (
        <ContentContainer style={Styles.screenContainer}>
            <CText data={i18n.t('skill_levels')} />
            <SizedBox height={Sizes.s8} />
            <ListTutors
                data={tutorIds}
                headerText={`${tutorIds.length} ${i18n.t('results')}`} />
        </ContentContainer>
    )
}

export default SearchTutors

const styles = StyleSheet.create({})
