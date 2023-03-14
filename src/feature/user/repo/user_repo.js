import { apiClient } from "../../axios-config";

const addFavouriteTutor = (tutorId) => {
    return apiClient.post('user/like-tutor', {
        "tutorId": tutorId
    });
}

const updateBasicProfile = (username, phone, avatar) => {
    return apiClient.put('user/update-profile', {
        "name": username,
        "avatar": avatar,
        "phone": phone
    });
}

const changePassword = (userId, oldPass, newPass) => {
    return apiClient.post('user​/change-password', {
        "id": userId,
        "oldPass": oldPass,
        "newPass": newPass
    });
}

const UserRepo = {
    addFavouriteTutor: addFavouriteTutor,
    updateBasicProfile: updateBasicProfile,
    changePassword: changePassword,
}

export { UserRepo }