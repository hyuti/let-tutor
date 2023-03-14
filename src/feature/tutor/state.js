import { Status } from '../../core/status'

const tutorState = () => {
    return {
        totalNumerTutors: 0,
        status: {
            DO_GET_TOTAL_NUMER_TUTORS_TUTOR_ACTION: Status.idle(),
            DO_GET_TOP_NEW_TUTOR_ACTION: Status.idle(),
            DO_SEARCH_TUTOR_TUTOR_ACTION: Status.idle(),
            DO_GET_FAVOURITES_TUTOR_ACTION: Status.idle(),
        },
        tutors: {},
        topNewTutors: [],
        topSellTutors: [],
        topRateTutors: [],
        recommendTutors: [],
        categories: {},
        tutorsByCategory: {}, //String - Array Id
        searchResults: [],
        favouriteTutors: [],
        currentTutorId: '',
        continuesLearningIds: [],
        myTutors: {
        },
        videoUrl: '',
    }
}

export {tutorState}