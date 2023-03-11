import { StyleSheet } from 'react-native'
import Alignment from "./alignment"
import Sizes from "./size"
import FlexDirection from './flexDirection'

const Styles = StyleSheet.create({
    fullScreen:{
        flex: 1,
        width: '100%',
        height: '100%',
    },
    row: {
        flexDirection: FlexDirection.row,
    },
    screenContainer: {
        width: '100%',
        height: '100%',
        paddingHorizontal: Sizes.s18,
        paddingVertical: Sizes.s14,
    },
    body: {
        flex: 1,
        width: '100%',
        paddingHorizontal: Sizes.s12,
    },
    screenColumn: {
        justifyContent: Alignment.center,
    }
})

export default Styles