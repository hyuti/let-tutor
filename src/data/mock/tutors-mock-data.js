import {DataType} from "../../core/data/data-type";

const TutorType = {
    SOFTWARE_DEVELOPMENT: 'SOFTWARE_DEVELOPMENT',
    IT_OPERATIONS: "IT_OPERATIONS",
    SECURITY_PROFESSIONAL: "SECURITY_PROFESSIONAL",
    DATA_PROFESSIONAL: "DATA_PROFESSIONAL",
    OTHER: 'OTHER',
}


const mockTutorType = (index) => {
    if (index % 5 == 0) {
        return TutorType.SECURITY_PROFESSIONAL;
    }

    if (index % 2 == 0) {
        return TutorType.SOFTWARE_DEVELOPMENT;
    }
    if (index % 3 == 0) {
        return TutorType.IT_OPERATIONS;
    }

    return TutorType.DATA_PROFESSIONAL;
}


const tutorsData= new Map(Array(3).fill(1).map((value, index) => {
    var id = `${Date.now()}${index}`;
    const tutorName = `Angular Fundamentals  ${index}`
    const listAuthor = ['1', '2', '3']
    return [id, {
        "id": id,
        "date": Date.now(),
        "image": "https://picsum.photos/700",
        "imageUrl": "https://picsum.photos/700",
        "tutorImage": "https://picsum.photos/700",
        "title": tutorName,
        "tutorTitle": tutorName,
        "name": tutorName,
        "length": "3h 4m",
        "totalHours": "3h 4m",
        "level": "Intermediate",
        "rating": 4.4,
        "ratingCount": 3 + index,
        "ratedNumber": 3 + index,
        "soldNumber": index,
        "teachers": "Joe Eames, +4",
        "instructorName":"Joe Eames",
        "type": mockTutorType(index),
        "authors": listAuthor,
        "introduce": tutorName + " Angular 9 simply is the latest version of Angular 2, you will learn this amazing framework from the ground up in this tutor!",
        "tutorPrice":"100.000",
        "price":"100.000",
        "process":"In-progress",
        "latestLearnTime":Date.now(),
        "videoNumber":10,
        "requirement":"Lorem ipsum",
        "learnWhat":"Lorem ipsum",
        "tutorsLikeCategory":[id]
    }]
}));
const tutorsDataNotMapObj=function(){
    data={}
    tutorsData.forEach((v,k)=>{
        data[k]=v
    })
    return data
}()
const favTutors=Array.from(tutorsData.values()).slice(0, 1)

const newTutors = Array.from(tutorsData.keys()).slice(0, 1);

const recommendedTutors = Array.from(tutorsData.keys()).slice(30, 50);

export { TutorType, tutorsData,tutorsDataNotMapObj, newTutors, recommendedTutors,favTutors }