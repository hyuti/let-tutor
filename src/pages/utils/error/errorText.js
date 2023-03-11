import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IconName from '../../../utils/iconName'
import Colors from '../../../utils/color'
import Sizes from '../../../utils/size'
import FlexDirection from '../../../utils/flexDirection'
import CIonIcon from '../icon/cIonIcon'
import SizedBox from '../container/sizedBox'

export default function ErrorText({ text, children }) {
    return (
        <View style={styles.errorRow}>
            <CIonIcon name={IconName.mdAlert} color={Colors.red} size={Sizes.s14} />
            <SizedBox width={Sizes.s8} />
            <Text style={styles.errorText}>{text ?? children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    errorRow: {
        flexDirection: FlexDirection.row
    },
    errorText: {
        fontSize: Sizes.s12,
        lineHeight: Sizes.s14,
        color: Colors.errorAlert,
        letterSpacing: 0.5,
    },
})