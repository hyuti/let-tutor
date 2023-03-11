import React from 'react'
import { ThemeProvider } from './themeProvider';
import { CoursesProvider } from './courseProvider'
import { FavouritesProvider } from './favoriteProvider';
import { SkillsProvider } from './skillProvider';
import { AuthorsProvider } from './authorProvider';
import { PathsProvider } from './pathProvider';
import { Provider as StoreProvider } from 'react-redux';
import { store } from '../features/store'
import { I18nextProvider } from 'react-i18next';
import i18n from '../utils/i18n';
const AppContext = React.createContext();

const AppProvider = (props) => {
    return (
        <StoreProvider store={store}>
            <AppContext.Provider>
                <ThemeProvider>
                    <CoursesProvider>
                        <FavouritesProvider>
                            <SkillsProvider>
                                <AuthorsProvider>
                                    <PathsProvider>
                                        <I18nextProvider i18n={i18n}>
                                            {props.children}
                                        </I18nextProvider>
                                    </PathsProvider>
                                </AuthorsProvider>
                            </SkillsProvider>
                        </FavouritesProvider>
                    </CoursesProvider>
                </ThemeProvider>
            </AppContext.Provider>
        </StoreProvider>
    )
}

export { AppContext, AppProvider }