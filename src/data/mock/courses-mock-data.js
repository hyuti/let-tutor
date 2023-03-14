import {DataType} from "../../core/data/data-type";

const CourseType = {
    SOFTWARE_DEVELOPMENT: 'SOFTWARE_DEVELOPMENT',
    IT_OPERATIONS: "IT_OPERATIONS",
    SECURITY_PROFESSIONAL: "SECURITY_PROFESSIONAL",
    DATA_PROFESSIONAL: "DATA_PROFESSIONAL",
    OTHER: 'OTHER',
}


const mockCourseType = (index) => {
    if (index % 5 == 0) {
        return CourseType.SECURITY_PROFESSIONAL;
    }

    if (index % 2 == 0) {
        return CourseType.SOFTWARE_DEVELOPMENT;
    }
    if (index % 3 == 0) {
        return CourseType.IT_OPERATIONS;
    }

    return CourseType.DATA_PROFESSIONAL;
}


const coursesData= new Map(Array(3).fill(1).map((value, index) => {
    var id = `${Date.now()}${index}`;
    const courseName = `Angular Fundamentals  ${index}`
    const listAuthor = ['1', '2', '3']
    return [id, {
        "id": id,
        "date": Date.now(),
        "image": "https://picsum.photos/700",
        "imageUrl": "https://picsum.photos/700",
        "courseImage": "https://picsum.photos/700",
        "title": courseName,
        "courseTitle": courseName,
        "name": courseName,
        "length": "3h 4m",
        "totalHours": "3h 4m",
        "level": "Intermediate",
        "rating": 4.4,
        "ratingCount": 3 + index,
        "ratedNumber": 3 + index,
        "soldNumber": index,
        "teachers": "Joe Eames, +4",
        "instructorName":"Joe Eames",
        "type": mockCourseType(index),
        "authors": listAuthor,
        "introduce": courseName + " Angular 9 simply is the latest version of Angular 2, you will learn this amazing framework from the ground up in this course!",
        "coursePrice":"$100",
        "process":"In-progress",
        "latestLearnTime":Date.now(),
    }]
}));
const coursesDataNotMapObj=function(){
    data={}
    coursesData.forEach((v,k)=>{
        data[k]=v
    })
    return data
}()
const favCourses=Array.from(coursesData.values()).slice(0, 1)

const newCourses = Array.from(coursesData.keys()).slice(0, 1);

const recommendedCourses = Array.from(coursesData.keys()).slice(30, 50);

export { CourseType, coursesData,coursesDataNotMapObj, newCourses, recommendedCourses,favCourses }