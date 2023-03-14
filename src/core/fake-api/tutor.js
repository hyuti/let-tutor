import tutorContentData from "../../data/mock/tutor-content-mock-data"

export const getTutorDetail=(tutorID,userID) =>{
    return {
        status:200,
        data:{
            payload:{
                ...tutorContentData[0],
                id:tutorID,
            },
            message:""
        }
    }
}