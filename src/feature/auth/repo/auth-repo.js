import { apiClient } from "../../axios-config";
import { USE_API } from "../../../core/fake-api/config";
import { login as fakeLogin } from "../../../core/fake-api/auth";

/*
    *Dispatcher = (args) => {
        if (!USE_API) {
            return entry1(args)
        }
        return entry2(args)
    }
*/

const loginDispatcher = (email, password) => {
    if (!USE_API) {
        return fakeLogin(email,password)
    }
    return realLogin(email,password)
}

const realLogin = (email, password) => {
    return apiClient.post('user/login', {
        "email": email,
        "password": password
    });
}

const register = (email, username, phone, password) => {
    return apiClient.post('user/register', {
        "email": email,
        "password": password,
        "username": username,
        "phone": phone
    });
}

const sendForgetPasswordEmail = (email) => {
    return apiClient.post('user/forget-pass/send-email', {
        "email": email
    });
}

const AuthRepo = {
    login: loginDispatcher,
    register: register,
    sendForgetPasswordEmail: sendForgetPasswordEmail,
}

export { AuthRepo }