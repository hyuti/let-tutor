import {
    SET_STATUS_TUTOR_ACTION, SET_ADD_TUTOR_ACTION, SET_ADD_TOP_NEW_TUTOR_ACTION, SET_ADD_TOP_SELL_TUTOR_ACTION, SET_ADD_TOP_RATE_TUTOR_ACTION, SET_ADD_RECOMMEND_TUTOR_ACTION, SET_ADD_CATEGORY_TUTOR_ACTION, SET_TUTOR_BY_CATEGORY_TUTOR_ACTION,
    SET_SEARCH_RESULTS_TUTOR_ACTION,
    SET_FAVOURITES_TUTOR_ACTION,
    SET_CURRENT_TUTOR_ID_TUTOR_ACTION,
    SET_ADD_CONTINUES_LEARNING_ID_TUTOR_ACTION,
    SET_ADD_MY_TUTORS_TUTOR_ACTION,
    SET_CURRENT_VIDEO_MP4_TUTOR_ACTION
} from "./actions";
import USE_API from "../../core/fake-api/config"
import { newTutors,tutorsDataNotMapObj,favTutors } from "../../data/mock/tutors-mock-data"

export const tutorReducer = (tutorState, action) => {
    if (!USE_API){
        tutorState= {
            ...tutorState,
            tutors:tutorsDataNotMapObj,
            topNewTutors:newTutors,
            topSellTutors: newTutors,
            topRateTutors: newTutors,
            recommendTutors: newTutors,
            favouriteTutors: favTutors,
            myTutors:tutorsDataNotMapObj,
            searchResults:favTutors,
        }
    }
    switch (action.type) {
        case SET_CURRENT_VIDEO_MP4_TUTOR_ACTION:
            return {
                ...tutorState,
                videoUrl: action.payload.videoUrl
            }
            break;
        case SET_ADD_MY_TUTORS_TUTOR_ACTION:
            return {
                ...tutorState,
                myTutors: action.payload.tutors
            }
            break;
        case SET_ADD_CONTINUES_LEARNING_ID_TUTOR_ACTION:
            var containt = Object.keys(tutorState.tutors)
                .includes(action.payload.tutorId)
            var newContinuesLearningIds = containt && !tutorState.continuesLearningIds.includes(action.payload.tutorId)
                ? [...tutorState.continuesLearningIds, action.payload.tutorId]
                : tutorState.continuesLearningIds
            return {
                ...tutorState,
                continuesLearningIds: newContinuesLearningIds
            }
            break;
        case SET_CURRENT_TUTOR_ID_TUTOR_ACTION:
            return {
                ...tutorState,
                currentTutorId: action.payload.tutorId
            }
            break;
        case SET_FAVOURITES_TUTOR_ACTION:
            return {
                ...tutorState,
                favouriteTutors: action.payload.tutors
            }
            break;
        case SET_SEARCH_RESULTS_TUTOR_ACTION:
            return {
                ...tutorState,
                searchResults: action.payload.tutors
            }
            break;
        case SET_STATUS_TUTOR_ACTION:
            const status = { ...tutorState.status };

            status[action.payload.statusKey] = action.payload.status;

            return {
                ...tutorState,
                status: status,
            }
        case SET_TUTOR_BY_CATEGORY_TUTOR_ACTION:
            return {
                ...tutorState,
                tutorsByCategory: {
                    ...tutorState.tutorsByCategory,
                    ...action.payload.tutorsByCategory
                }
            }
            break;
        case SET_ADD_CATEGORY_TUTOR_ACTION:
            return {
                ...tutorState,
                categories: {
                    ...tutorState.categories,
                    ...action.payload.categories
                }
            }
            break;
        case SET_ADD_TUTOR_ACTION:
            return {
                ...tutorState,
                tutors: {
                    ...tutorState.tutors,
                    ...action.payload.tutors
                }
            }
            break;
        case SET_ADD_TOP_NEW_TUTOR_ACTION:
            var topNewTutors = [...tutorState.topNewTutors, ...action.payload.tutorIds]
            return {
                ...tutorState,
                topNewTutors: topNewTutors
            }
            break;
        case SET_ADD_TOP_SELL_TUTOR_ACTION:
            var topSellTutors = [...tutorState.topSellTutors, ...action.payload.tutorIds]
            return {
                ...tutorState,
                topSellTutors: topSellTutors
            }
            break;
        case SET_ADD_TOP_RATE_TUTOR_ACTION:
            var topRateTutors = [...tutorState.topRateTutors, ...action.payload.tutorIds]
            return {
                ...tutorState,
                topRateTutors: topRateTutors
            }
            break;

        case SET_ADD_RECOMMEND_TUTOR_ACTION:
            var recommendTutors = [...tutorState.recommendTutors, ...action.payload.tutorIds]
            return {
                ...tutorState,
                recommendTutors: recommendTutors
            }
            break;
        default:
            return tutorState;
    }
}