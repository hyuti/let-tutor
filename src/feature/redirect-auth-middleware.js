import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { AuthAction } from './auth/actions'
import { LoadStatus } from '../core/status'
import { DoGetTotalNumerTutorsTutorAction, DoGetTopNewTutorAction, DoGetTopSellTutorAction, DoGetTopRateTutorAction, DoGetRecommendTutorTutorAction, DoGetAllCategoryTutorAction, DoGetFavouritesTutorAction, DoGetMyTutorsTutorAction } from './tutor/actions';
import { DoGetAllInstructor } from './instructor/actions';

function* onAuthStatusChange(action) {
    if (action.payload.statusKey === AuthAction.DoLoginAuthAction) {
        if (action.payload.status.loadStatus == LoadStatus.success) {
            var data = action.payload.status.data; // token and userInfo

            console.log('DEBUG RED', data)

            yield put(DoGetTopNewTutorAction());
            yield put(DoGetTopSellTutorAction());
            yield put(DoGetTopRateTutorAction());
            yield put(DoGetAllInstructor());
            yield put(DoGetRecommendTutorTutorAction(data.userInfo.id));
            yield put(DoGetAllCategoryTutorAction());
            yield put(DoGetFavouritesTutorAction());
            yield put(DoGetMyTutorsTutorAction())
        }
    }
}


function* redirectAuthMiddleware() {
    yield takeEvery(AuthAction.SetStatusAuthAction, onAuthStatusChange)
}

export { redirectAuthMiddleware }