export const DO_GET_TOTAL_NUMER_TUTORS_TUTOR_ACTION = 'DO_GET_TOTAL_NUMER_TUTORS_TUTOR_ACTION'
export const SET_STATUS_TUTOR_ACTION = 'SET_STATUS_TUTOR_ACTION'
export const DO_GET_TOP_NEW_TUTOR_ACTION = 'DO_GET_TOP_NEW_TUTOR_ACTION'
export const DO_GET_TOP_SELL_TUTOR_ACTION = 'DO_GET_TOP_SELL_TUTOR_ACTION'
export const DO_GET_TOP_RATE_TUTOR_ACTION = 'DO_GET_TOP_RATE_TUTOR_ACTION'
export const SET_ADD_TUTOR_ACTION = 'SET_ADD_TUTOR_ACTION'
export const SET_ADD_TOP_NEW_TUTOR_ACTION = 'SET_ADD_TOP_NEW_TUTOR_ACTION'
export const SET_ADD_TOP_SELL_TUTOR_ACTION = 'SET_ADD_TOP_SELL_TUTOR_ACTION'
export const SET_ADD_TOP_RATE_TUTOR_ACTION = 'SET_ADD_TOP_RATE_TUTOR_ACTION'
export const DO_GET_TUTOR_DETAIL_TUTOR_ACTION = 'DO_GET_TUTOR_DETAIL_TUTOR_ACTION'
export const DO_GET_RECOMMEND_TUTOR_TUTOR_ACTION = 'DO_GET_RECOMMEND_TUTOR_TUTOR_ACTION'
export const SET_ADD_RECOMMEND_TUTOR_ACTION = 'SET_ADD_RECOMMEND_TUTOR_ACTION'
export const DO_GET_ALL_CATEGORY_TUTOR_ACTION = 'DO_GET_ALL_CATEGORY_TUTOR_ACTION'
export const SET_ADD_CATEGORY_TUTOR_ACTION = 'SET_ADD_CATEGORY_TUTOR_ACTION'
export const DO_GET_TUTOR_BY_CATEGORY_TUTOR_ACTION = 'DO_GET_TUTOR_BY_CATEGORY_TUTOR_ACTION'
export const SET_TUTOR_BY_CATEGORY_TUTOR_ACTION = 'SET_TUTOR_BY_CATEGORY_TUTOR_ACTION'
export const DO_SEARCH_TUTOR_TUTOR_ACTION = 'DO_SEARCH_TUTOR_TUTOR_ACTION'
export const SET_SEARCH_RESULTS_TUTOR_ACTION = 'SET_SEARCH_RESULTS_TUTOR_ACTION'
export const DO_GET_FAVOURITES_TUTOR_ACTION = 'DO_GET_FAVOURITES_TUTOR_ACTION'
export const SET_FAVOURITES_TUTOR_ACTION = 'SET_FAVOURITES_TUTOR_ACTION'
export const SET_CURRENT_TUTOR_ID_TUTOR_ACTION = 'SET_CURRENT_TUTOR_ID_TUTOR_ACTION'
export const SET_ADD_CONTINUES_LEARNING_ID_TUTOR_ACTION = 'SET_ADD_CONTINUES_LEARNING_ID_TUTOR_ACTION'
export const DO_GET_FREE_TUTOR_TUTOR_ACTION = 'DO_GET_FREE_TUTOR_TUTOR_ACTION'
export const DO_GET_MY_TUTORS_TUTOR_TUTOR_ACTION = 'DO_GET_MY_TUTORS_TUTOR_TUTOR_ACTION'
export const SET_ADD_MY_TUTORS_TUTOR_ACTION = 'SET_ADD_MY_TUTORS_TUTOR_ACTION'
export const DO_GET_TUTOR_LESSON_VIDEO_TUTOR_ACTION = 'DO_GET_TUTOR_LESSON_VIDEO_TUTOR_ACTION'
export const SET_CURRENT_VIDEO_MP4_TUTOR_ACTION = 'SET_CURRENT_VIDEO_MP4_TUTOR_ACTION'

export const SetCurrentVideoMp4TutorAction = (videoUrl) => {
    return {
        type: SET_CURRENT_VIDEO_MP4_TUTOR_ACTION,
        payload: {
            videoUrl: videoUrl
        }
    }
}

export const DoGetTutorLessonVideoTutorAction = (tutorId, lessonId) => {
    return {
        type: DO_GET_TUTOR_LESSON_VIDEO_TUTOR_ACTION,
        payload: {
            tutorId: tutorId,
            lessonId: lessonId,
        }
    }
}


export const SetAddMyTutorsTutorAction = (tutors) => {
    return {
        type: SET_ADD_MY_TUTORS_TUTOR_ACTION,
        payload: {
            tutors: tutors
        }
    }
}

export const DoGetMyTutorsTutorAction = () => {
    return {
        type: DO_GET_MY_TUTORS_TUTOR_TUTOR_ACTION,
        payload: {
        }
    }
}

export const DoGetFreeTutorTutorAction = (tutorId) => {
    return {
        type: DO_GET_FREE_TUTOR_TUTOR_ACTION,
        payload: {
            tutorId: tutorId
        }
    }
}

export const SetAddContinuesLearningTutorAction = (tutorId) => {
    return {
        type: SET_ADD_CONTINUES_LEARNING_ID_TUTOR_ACTION,
        payload: {
            tutorId: tutorId
        }
    }
}

export const SetCurrentTutorIdTutorAction = (tutorId) => {
    return {
        type: SET_CURRENT_TUTOR_ID_TUTOR_ACTION,
        payload: {
            tutorId: tutorId
        }
    }
}

export const DoGetFavouritesTutorAction = () => {
    return {
        type: DO_GET_FAVOURITES_TUTOR_ACTION,
        payload: {
        }
    }
}

export const SetFavouritesTutorAction = (tutors) => {
    return {
        type: SET_FAVOURITES_TUTOR_ACTION,
        payload: {
            tutors: tutors
        }
    }
}

export const DoSearchTutorTutorAction = (keyword) => {
    return {
        type: DO_SEARCH_TUTOR_TUTOR_ACTION,
        payload: {
            keyword: keyword
        }
    }
}

export const SetSearchResultTutorAction = (tutors) => {
    return {
        type: SET_SEARCH_RESULTS_TUTOR_ACTION,
        payload: {
            tutors: tutors
        }
    }
}

export const DoGetTutorByCategoryTutorAction = (category) => {
    return {
        type: DO_GET_TUTOR_BY_CATEGORY_TUTOR_ACTION,
        payload: {
            category: category
        }
    }
}

export const SetTutorByCategoryTutorAction = (tutorsByCategory) => {
    return {
        type: SET_TUTOR_BY_CATEGORY_TUTOR_ACTION,
        payload: {
            tutorsByCategory: tutorsByCategory
        }
    }
}

export const DoGetAllCategoryTutorAction = () => {
    return {
        type: DO_GET_ALL_CATEGORY_TUTOR_ACTION,
        payload: {
        }
    }
}

export const SetAddCategoriesTutorAction = (categories) => {
    return {
        type: SET_ADD_CATEGORY_TUTOR_ACTION,
        payload: {
            categories: categories
        }
    }
}

export const DoGetRecommendTutorTutorAction = (userId, limit, offset) => {
    return {
        type: DO_GET_RECOMMEND_TUTOR_TUTOR_ACTION,
        payload: {
            userId: userId,
            limit: limit ?? 5,
            offset: offset ?? 1
        }
    }
}

export const SetAddRecommendTutorAction = (tutorIds) => {
    return {
        type: SET_ADD_RECOMMEND_TUTOR_ACTION,
        payload: {
            tutorIds: tutorIds
        }
    }
}

const DoGetTotalNumerTutorsTutorAction = () => {
    return {
        type: DO_GET_TOTAL_NUMER_TUTORS_TUTOR_ACTION,
        payload: {
        }
    }
}

const DoGetTopNewTutorAction = () => {
    return {
        type: DO_GET_TOP_NEW_TUTOR_ACTION,
        payload: {

        }
    }
}

const DoGetTopSellTutorAction = () => {
    return {
        type: DO_GET_TOP_SELL_TUTOR_ACTION,
        payload: {

        }
    }
}

const DoGetTopRateTutorAction = () => {
    return {
        type: DO_GET_TOP_RATE_TUTOR_ACTION,
        payload: {

        }
    }
}

const SetAddTutorAction = (tutors) => {
    return {
        type: SET_ADD_TUTOR_ACTION,
        payload: {
            tutors: tutors
        }
    }
}

const SetAddTopNewTutorAction = (tutorIds) => {
    return {
        type: SET_ADD_TOP_NEW_TUTOR_ACTION,
        payload: {
            tutorIds: tutorIds
        }
    }
}

const SetAddTopSellTutorAction = (tutorIds) => {
    return {
        type: SET_ADD_TOP_SELL_TUTOR_ACTION,
        payload: {
            tutorIds: tutorIds
        }
    }
}

const SetAddTopRateTutorAction = (tutorIds) => {
    return {
        type: SET_ADD_TOP_RATE_TUTOR_ACTION,
        payload: {
            tutorIds: tutorIds
        }
    }
}

const SetStatusTutorAction = (statusKey, status) => {
    return {
        type: SET_STATUS_TUTOR_ACTION,
        payload: {
            statusKey: statusKey,
            status: status,
        }
    }
}

export const DoGetTutorDetailTutorAction = (tutorId, userId) => {
    return {
        type: DO_GET_TUTOR_DETAIL_TUTOR_ACTION,
        payload: {
            tutorId: tutorId,
            userId: userId,
        }
    }
}

export {
    DoGetTotalNumerTutorsTutorAction,
    SetStatusTutorAction,
    DoGetTopNewTutorAction,
    SetAddTutorAction,
    SetAddTopNewTutorAction,
    DoGetTopSellTutorAction,
    SetAddTopSellTutorAction,
    DoGetTopRateTutorAction,
    SetAddTopRateTutorAction,
}