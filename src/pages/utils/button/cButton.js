import React from 'react'
import { Button } from 'react-native-elements'

const CButton = ({ onPress, title, type, style, titleStyle, color, loading, disabled, icon, iconRight }) => {
    return (
        <Button
            onPress={onPress}
            title={title}
            type={type}
            style={style}
            containerStyle={style}
            titleStyle={titleStyle}
            loading={loading}
            disabled={disabled}
            icon={icon}
            iconRight={iconRight ?? false}
        />
    )
}

export default CButton