import courseContentData from "../../data/mock/course-content-mock-data"

export const getCourseDetail=(courseID,userID) =>{
    return {
        status:200,
        data:{
            payload:{
                ...courseContentData[0],
                id:courseID,
            },
            message:""
        }
    }
}