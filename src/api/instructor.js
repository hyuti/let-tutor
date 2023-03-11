import { apiClient } from "../utils/axios";

const getAllInstructor = (courseId) => {
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