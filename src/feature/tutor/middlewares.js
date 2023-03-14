import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
    DO_GET_TOTAL_NUMER_TUTORS_TUTOR_ACTION, SetStatusTutorAction, DO_GET_TOP_NEW_TUTOR_ACTION, SetAddTutorAction, SetAddTopNewTutorAction, DO_GET_TOP_SELL_TUTOR_ACTION,
    SetAddTopSellTutorAction,
    DO_GET_TOP_RATE_TUTOR_ACTION,
    SetAddTopRateTutorAction,
    DO_GET_TUTOR_DETAIL_TUTOR_ACTION,
    DO_GET_RECOMMEND_TUTOR_TUTOR_ACTION,
    SetAddRecommendTutorAction,
    DO_GET_ALL_CATEGORY_TUTOR_ACTION,
    SetAddCategoriesTutorAction,
    DO_GET_TUTOR_BY_CATEGORY_TUTOR_ACTION,
    SetTutorByCategoryTutorAction,
    DO_SEARCH_TUTOR_TUTOR_ACTION,
    SetSearchResultTutorAction,
    DO_GET_FAVOURITES_TUTOR_ACTION,
    SetFavouritesTutorAction,
    DO_GET_FREE_TUTOR_TUTOR_ACTION,
    DO_GET_MY_TUTORS_TUTOR_TUTOR_ACTION,
    SetAddMyTutorsTutorAction,
    DoGetMyTutorsTutorAction,
    DO_GET_TUTOR_LESSON_VIDEO_TUTOR_ACTION,
    SetCurrentVideoMp4TutorAction
} from './actions'
import { Status } from '../../core/status'
import { TutorRepo } from './repo/tutor-repo';

function* getTotalNumberTutor(action) {
    const statusKey = DO_GET_TOTAL_NUMER_TUTORS_TUTOR_ACTION;

    try {
        yield put(SetStatusTutorAction(statusKey, Status.loading()))
        const res = yield TutorRepo.getTotalNumerTutors()
        yield put(SetStatusTutorAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusTutorAction(statusKey, Status.error(e.message)))
    }
}

function* getTopNewTutor(action) {
    const statusKey = DO_GET_TOP_NEW_TUTOR_ACTION;

    try {
        yield put(SetStatusTutorAction(statusKey, Status.loading()))
        const res = yield TutorRepo.getTopNewTutors()

        var tutors = res.data.payload.reduce(function (map, tutor) {
            map[tutor.id] = tutor;
            return map;
        }, {});

        yield put(SetAddTutorAction(tutors))

        var tutorIds = res.data.payload.map((tutor) => tutor.id);

        yield put(SetAddTopNewTutorAction(tutorIds))

        yield put(SetStatusTutorAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusTutorAction(statusKey, Status.error(e.message)))
    }
}

function* getTopSellTutor(action) {
    const statusKey = DO_GET_TOP_SELL_TUTOR_ACTION;

    try {
        yield put(SetStatusTutorAction(statusKey, Status.loading()))
        const res = yield TutorRepo.getTopSellTutors()

        var tutors = res.data.payload.reduce(function (map, tutor) {
            map[tutor.id] = tutor;
            return map;
        }, {});

        yield put(SetAddTutorAction(tutors))

        var tutorIds = res.data.payload.map((tutor) => tutor.id);

        yield put(SetAddTopSellTutorAction(tutorIds))

        yield put(SetStatusTutorAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusTutorAction(statusKey, Status.error(e.message)))
    }
}

function* getTopRateTutor(action) {
    const statusKey = DO_GET_TOP_RATE_TUTOR_ACTION;

    try {
        yield put(SetStatusTutorAction(statusKey, Status.loading()))
        const res = yield TutorRepo.getTopRateTutors()

        var tutors = res.data.payload.reduce(function (map, tutor) {
            map[tutor.id] = tutor;
            return map;
        }, {});

        yield put(SetAddTutorAction(tutors))

        var tutorIds = res.data.payload.map((tutor) => tutor.id);

        yield put(SetAddTopRateTutorAction(tutorIds))

        yield put(SetStatusTutorAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusTutorAction(statusKey, Status.error(e.message)))
    }
}

function* getTutorDetail(action) {
    const statusKey = `${DO_GET_TUTOR_DETAIL_TUTOR_ACTION}${action.payload.tutorId}`;

    try {
        yield put(SetStatusTutorAction(statusKey, Status.loading()))

        const res = yield TutorRepo.getTutorDetail(action.payload.tutorId, action.payload.userId)

        console.log('DEBUG DO_GET_TUTOR_DETAIL_TUTOR_ACTION', Date.now().toString())

        var tutorDetail = res.data.payload;

        var tutors = {}

        tutors[tutorDetail.id] = tutorDetail

        yield put(SetAddTutorAction(tutors))

        yield put(SetStatusTutorAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusTutorAction(statusKey, Status.error(e.message)))
    }
}

function* getRecommendTutors(action) {
    const statusKey = DO_GET_RECOMMEND_TUTOR_TUTOR_ACTION;

    try {
        yield put(SetStatusTutorAction(statusKey, Status.loading()))
        const res = yield TutorRepo.getRecommendTutors(action.payload.userId, action.payload.limit, action.payload.offset)

        var tutors = res.data.payload.reduce(function (map, tutor) {
            map[tutor.id] = tutor;
            return map;
        }, {});

        yield put(SetAddTutorAction(tutors))

        var recommendTutors = res.data.payload.map((tutor) => tutor.id);

        yield put(SetAddRecommendTutorAction(recommendTutors))

        yield put(SetStatusTutorAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusTutorAction(statusKey, Status.error(e.message)))
    }
}



function* getAllCategory(action) {
    const statusKey = DO_GET_ALL_CATEGORY_TUTOR_ACTION;

    try {
        yield put(SetStatusTutorAction(statusKey, Status.loading()))

        const res = yield TutorRepo.getAllCategory()

        var categories = res.data.payload.reduce(function (map, item) {
            map[item.id] = item;
            return map;
        }, {});

        yield put(SetAddCategoriesTutorAction(categories))

        yield put(SetStatusTutorAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusTutorAction(statusKey, Status.error(e.message)))
    }
}

function* getCategoryTutors(action) {
    const statusKey = DO_GET_TUTOR_BY_CATEGORY_TUTOR_ACTION;

    try {
        yield put(SetStatusTutorAction(statusKey, Status.loading()))

        var category = action.payload.category

        const res = yield TutorRepo.getCategoryTutors(category)

        var tutorsByCategory = {};

        tutorsByCategory[category] = res.data.payload.rows

        yield put(SetTutorByCategoryTutorAction(tutorsByCategory))

        yield put(SetStatusTutorAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusTutorAction(statusKey, Status.error(e.message)))
    }
}

function* searchTutors(action) {
    const statusKey = DO_SEARCH_TUTOR_TUTOR_ACTION;

    try {
        yield put(SetStatusTutorAction(statusKey, Status.loading()))

        var payload = action.payload

        const res = yield TutorRepo.searchTutors(payload.keyword)

        yield put(SetSearchResultTutorAction(res.data?.payload?.rows ?? []))

        yield put(SetStatusTutorAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusTutorAction(statusKey, Status.error(e.message)))
    } finally {
        yield put(SetStatusTutorAction(statusKey, Status.idle()))
    }
}

function* getFavouriteTutors(action) {
    const statusKey = DO_GET_FAVOURITES_TUTOR_ACTION;

    try {
        yield put(SetStatusTutorAction(statusKey, Status.loading()))

        const res = yield TutorRepo.getFavouriteTutors()

        yield put(SetFavouritesTutorAction(res.data?.payload ?? []))

        yield put(SetStatusTutorAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusTutorAction(statusKey, Status.error(e.message)))
    } finally {
        yield put(SetStatusTutorAction(statusKey, Status.idle()))
    }
}

function* getFreeTutor(action) {
    const statusKey = DO_GET_FREE_TUTOR_TUTOR_ACTION;

    try {
        yield put(SetStatusTutorAction(statusKey, Status.loading()))
        const res = yield TutorRepo.getFreeTutor(action.payload.tutorId)
        yield put(DoGetMyTutorsTutorAction())
        yield put(SetStatusTutorAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusTutorAction(statusKey, Status.error(e.message)))
    }
}

function* getMyTutors(action) {
    const statusKey = DO_GET_MY_TUTORS_TUTOR_TUTOR_ACTION;

    try {
        yield put(SetStatusTutorAction(statusKey, Status.loading()))
        const res = yield TutorRepo.getMyTutors()
        
        var tutors = res.data.payload.reduce(function (map, tutor) {
            map[tutor.id] = tutor;
            return map;
        }, {});

        yield put(SetAddMyTutorsTutorAction(tutors))

        yield put(SetStatusTutorAction(statusKey, Status.success(res.data.message, res.data.payload)))
    } catch (e) {
        yield put(SetStatusTutorAction(statusKey, Status.error(e.message)))
    }
}

function* getTutorLessonVideo(action) {
    const statusKey = DO_GET_TUTOR_LESSON_VIDEO_TUTOR_ACTION;

    try {
        yield put(SetStatusTutorAction(statusKey, Status.loading()))
        const res = yield TutorRepo.getTutorLessonVideo(action.payload.tutorId, action.payload.lessonId)
        yield put(SetCurrentVideoMp4TutorAction(res.data.payload.videoUrl))
        yield put(SetStatusTutorAction(statusKey, Status.success(res.data.message, res.data.payload.videoUrl)))
    } catch (e) {
        yield put(SetStatusTutorAction(statusKey, Status.error(e.message)))
    }
}

function* tutorMiddleware() {
    yield takeEvery(DO_GET_TOTAL_NUMER_TUTORS_TUTOR_ACTION, getTotalNumberTutor);
    yield takeEvery(DO_GET_TOP_NEW_TUTOR_ACTION, getTopNewTutor);
    yield takeEvery(DO_GET_TOP_SELL_TUTOR_ACTION, getTopSellTutor);
    yield takeEvery(DO_GET_TOP_RATE_TUTOR_ACTION, getTopRateTutor);
    yield takeEvery(DO_GET_TUTOR_DETAIL_TUTOR_ACTION, getTutorDetail);
    yield takeEvery(DO_GET_RECOMMEND_TUTOR_TUTOR_ACTION, getRecommendTutors);
    yield takeEvery(DO_GET_ALL_CATEGORY_TUTOR_ACTION, getAllCategory);
    yield takeEvery(DO_GET_TUTOR_BY_CATEGORY_TUTOR_ACTION, getCategoryTutors);
    yield takeEvery(DO_SEARCH_TUTOR_TUTOR_ACTION, searchTutors);
    yield takeEvery(DO_GET_FAVOURITES_TUTOR_ACTION, getFavouriteTutors);
    yield takeEvery(DO_GET_FREE_TUTOR_TUTOR_ACTION, getFreeTutor);
    yield takeEvery(DO_GET_MY_TUTORS_TUTOR_TUTOR_ACTION, getMyTutors);
    yield takeEvery(DO_GET_TUTOR_LESSON_VIDEO_TUTOR_ACTION, getTutorLessonVideo);
}

export { tutorMiddleware }