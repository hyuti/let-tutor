import { apiClient } from "../../axios-config";

const getAllInstructor = (tutorId) => {
    return apiClient.get('instructor', {
    });
}

const getInstructorDetails = (instructorId) => {
    return apiClient.get(`instructor/detail/${instructorId}`, {
    });
}

const InstructorRepo = {
    getAllInstructor: getAllInstructor,
    getInstructorDetails: getInstructorDetails,
}

export { InstructorRepo }