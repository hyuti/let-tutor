import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import Styles from '../../../../res/styles/styles'
import CSectionList from '../../../Common/Container/c-section-list'
import ListTutorsItem from '../../../Tutors/ListTutorsItem/list-tutors-item'
import CSectionHeader from '../../../Common/Container/c-section-header'
import ProfileTile from '../../../Common/Profile/profile-tile'
import CDivider from '../../../Common/Container/c-divider'
import Sizes from '../../../../res/sizes'
import PathItemVer from '../../../Content/Paths/path-item-ver'
import i18n from '../../../../res/i18n'
import { TutorsContext } from '../../../../provider/tutors-provider'
import { PathsContext } from '../../../../provider/paths-provider'
import { AuthorsContext } from '../../../../provider/authors-provider'
import ContentContainer from '../../../Common/Screen/content-container'


const SearchAll = ({ tutorIds, authorIds, pathIds }) => {
    const tutorsContext = useContext(TutorsContext)

    const pathsContext = useContext(PathsContext)

    const authorsContext = useContext(AuthorsContext)

    const DATA = [
        {
            title: i18n.t('tutors'),
            data: tutorIds ?? [],
        },
        {
            title: i18n.t('paths'),
            data: pathIds ?? [],
        },
        {
            title: i18n.t('authors'),
            data: authorIds ?? [],
        },
    ]

    const buildItem = (item) => {
        if (tutorsContext.tutors.has(item)) {
            return <ListTutorsItem tutor={tutorsContext.tutors.get(item)} />;
        } else if (pathsContext.paths.has(item)) {
            const path = pathsContext.paths.get(item)
            return <PathItemVer
                image={path.image}
                name={path.name}
                tutorsCount={path.tutorsCount} />
        } else if (authorsContext.authors.has(item)) {
            const author = authorsContext.authors.get(item)
            return <ProfileTile
                image={author.avatar}
                title={author.name}
                subtitle={`${author.tutorsCount} ${i18n.t('tutors')}`}
                style={styles.author} />
        } else {
            return <View />
        }
    }
    return (
        <ContentContainer style={Styles.screenContainer}>
            <CSectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => buildItem(item)}
                renderSectionHeader={({ section: { title, data } }) => (
                    <CSectionHeader
                        leadingText={title}
                        trailingText={`${data.length} ${i18n.t('results')}`} />
                )}
                ItemSeparatorComponent={() => <CDivider containerHeight={Sizes.s16} />}
            />
        </ContentContainer>
    )
}

export default SearchAll

const styles = StyleSheet.create({
    author: {

    }
})
