// Imports: Dependencies
import { all, fork, takeEvery, put } from 'redux-saga/effects';
import { authMiddlewares } from './auth';
import {redirectAppMiddleware} from './redirectApp'
import { courseMiddleware } from './course';
import { redirectAuthMiddleware } from './redirectAuth';
import { userMiddlewares } from './user';
import { instructorMiddlewares } from './instructor';
import { DO_CHANGE_LANGUAGE_APP_ACTION, SetChangeLanguageAppAction } from '../features/app/actions';
import i18n from '../utils/i18n';
// Imports: Redux Sagas

function* changeLanguage(action) {
    try {

        const res = yield i18n.changeLanguage(action.payload.language)

        yield put(SetChangeLanguageAppAction(action.payload.language))

    } catch (e) {

        console.log('ERROR DO_CHANGE_LANGUAGE_APP_ACTION', e)
    }
}

export function* appMiddlewares() {
    yield all([
        fork(authMiddlewares),
        fork(redirectAppMiddleware),
        fork(courseMiddleware),
        fork(redirectAuthMiddleware),
        fork(userMiddlewares),
        fork(instructorMiddlewares),
    ]);
    yield takeEvery(DO_CHANGE_LANGUAGE_APP_ACTION, changeLanguage);
};