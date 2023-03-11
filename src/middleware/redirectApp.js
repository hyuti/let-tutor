import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { AuthAction, DO_CLEAR_APPSTATE_AUTH_ACTION } from '../features/auth/actions'
import { ClearAppStateAppAction } from '../features/app/actions'

function* clearAppState(action) {
    yield put(ClearAppStateAppAction())
}

function* redirectAppMiddleware() {
    yield takeEvery(DO_CLEAR_APPSTATE_AUTH_ACTION, clearAppState)
}

export { redirectAppMiddleware }