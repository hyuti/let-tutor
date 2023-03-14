// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import { AuthAction } from './auth/actions'
// import { LoadStatus } from '../core/status'
// import { DoGetTotalNumerTutorsTutorAction, DoGetTopNewTutorAction, DoGetTopSellTutorAction, DoGetTopRateTutorAction, DoGetRecommendTutorTutorAction, DoGetAllCategoryTutorAction, DoGetFavouritesTutorAction } from './tutor/actions';
// import { DoGetAllInstructor } from './instructor/actions';
// import { SET_STATUS_USER_ACTION, DO_ADD_FAVOURITE_TUTOR_USER_ACTION } from './user/actions';

// function* onUserStatusChange(action) {
//     if (action.payload.statusKey.includes(DO_ADD_FAVOURITE_TUTOR_USER_ACTION)) {
//         if (action.payload.status.loadStatus == LoadStatus.success) {
//             yield put(DoGetFavouritesTutorAction());
//         }
//     }
// }


// function* redirectAuthMiddleware() {
//     yield takeEvery(SET_STATUS_USER_ACTION, onUserStatusChange)
// }

// export { redirectAuthMiddleware }