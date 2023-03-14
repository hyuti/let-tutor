import React from 'react'
import { StyleSheet, View } from 'react-native'
import EmptyScreen from '../../Common/Screen/empty-screen'
import ListTutors from '../../Tutors/ListTutors/list-tutors'
import Sizes from '../../../res/sizes'
import Styles from '../../../res/styles/styles'
import IconName from '../../../res/icon-name'
import HomeAppBar from '../../Common/AppBar/home-app-bar'
import i18n from '../../../res/i18n'

const Downloads = () => {

    const downloadedTutors = []

    const Content = () => {
        if (downloadedTutors.length == 0)
            return <EmptyScreen
                uri={IconName.mdCloudDownload}
                title={i18n.t('no_downloads')}
                subtitle={i18n.t('tutors_you_download_will_appear_here')} />
        else return <ListTutors
            data={downloadedTutors}
            hasTrailing={false} />
    }

    return (
        <View style={Styles.fullScreen}>
            <HomeAppBar title={i18n.t('downloads')} />
            <View style={Styles.body}>
                <Content/>
            </View>
        </View>
    )
}

export default Downloads

const styles = StyleSheet.create({
    body: {
        paddingHorizontal: Sizes.s8,
    }
})
