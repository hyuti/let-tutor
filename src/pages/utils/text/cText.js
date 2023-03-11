import React, { useContext } from 'react'
import { Text } from 'react-native'
import { ThemeContext} from '../../../provider/themeProvider'

const CText = ({ style, data, numberOfLines , children}) => {
    const themeContext = useContext(ThemeContext)

    return (
        <Text style={{...style, color: themeContext.theme.textColor}} numberOfLines={numberOfLines}>
            {data || children}
        </Text>
    )
}

export default CText