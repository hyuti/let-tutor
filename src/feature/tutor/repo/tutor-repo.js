import { apiClient } from "../../axios-config"
import { USE_API } from "../../../core/fake-api/config";
import { getTutorDetail as fakeGetTutorDetail } from "../../../core/fake-api/tutor";

const getTotalNumerTutors = () => {
    return apiClient.get('tutor/total-number');
}

const getTopNewTutors = () => {
    return apiClient.post('tutor/top-new', {
        "limit": 10,
        "page": 1
    });
}

const getTopSellTutors = () => {
    return apiClient.post('tutor/top-sell', {
        "limit": 10,
        "page": 1
    });
}

const getTopRateTutors = () => {
    return apiClient.post('tutor/top-rate', {
        "limit": 10,
        "page": 1
    });
}

const getTutorDetail = (tutorId, userId) => {
    if (!USE_API){
        return fakeGetTutorDetail(tutorId,userId)  
    }
    return apiClient.get(`tutor/get-tutor-detail/${tutorId}/${userId}`, {
    });
}

const getRecommendTutors = (userId, limit, offset) => {
    return apiClient.get(`user/recommend-tutor/${userId}/${limit}/${offset}`, {

    });
}

const getAllCategory = () => {
    return apiClient.get(`category/all`, {

    });
}

const getCategoryTutors = (category) => {
    var body = {
        "keyword": "",
        "opt": {
            "category": [
                category
            ]
        },
        "limit": 2000,
        "offset": 1
    }

    return apiClient.post(`tutor/search`, body);
}

const searchTutors = (keyword) => {
    var body = {
        "keyword": keyword,
        "limit": 2000,
        "offset": 1
    }

    return apiClient.post(`tutor/search`, body);
}

const getFavouriteTutors = () => {
    var body = {
    }

    return apiClient.get(`user/get-favorite-tutors`, body);
}

const getFreeTutor = (tutorId) => {
    var body = {
        "tutorId": tutorId
    }

    return apiClient.post(`payment/get-free-tutors`, body);
}

const getMyTutors = () => {
    var body = {
    }
    return apiClient.get(`user/get-process-tutors`, body);
}

const getTutorLessonVideo = (tutorId, lessonId) => {
    var body = {
    }
    return apiClient.get(`lesson/video/${tutorId}/${lessonId}`, body);
}

const TutorRepo = {
    getTotalNumerTutors: getTotalNumerTutors,
    getTopNewTutors: getTopNewTutors,
    getTopSellTutors: getTopSellTutors,
    getTopRateTutors: getTopRateTutors,
    getTutorDetail: getTutorDetail,
    getRecommendTutors: getRecommendTutors,
    getAllCategory: getAllCategory,
    getCategoryTutors: getCategoryTutors,
    searchTutors: searchTutors,
    getFavouriteTutors: getFavouriteTutors,
    getFreeTutor: getFreeTutor,
    getMyTutors: getMyTutors,
    getTutorLessonVideo: getTutorLessonVideo,
}

export {
    TutorRepo
}