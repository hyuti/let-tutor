import usersData from "../../data/mock/users-mock-data";
export const login = (username, password) => {
    if (username === 'admin' && password == '12345678') {
        return {
            status: 200,
            data:{
                token: 'empty',
                userInfo:usersData.get("Admin")
            },
        };
    } else {
        return { status: 404 };
    }
}

export const register = (email, username, password, fullName, phone) => {
    if (username != '' && password != '' && fullName != '') {
        return {
            status: 200,
            user: {
                email: email,
                username: username,
                password: password,
                fullName: fullName,
                phone: phone,
                token: 'empty',
            }
        };
    } else {
        return { status: 404 };
    }
}