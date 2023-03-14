import React, { useState } from 'react'
import { tutorsData, newTutors, recommendedTutors } from '../data/mock/tutors-mock-data'

const TutorsContext = React.createContext()

const TutorsProvider = (props) => {
    const [tutors, setTutors] = useState(tutorsData)
    const [tutorIds, setTutorIds] = useState(Array.from(tutors.keys()))
    const [learningTutorIds, setLearningTutorIds] = useState(new Set())
    const [newReleaseTutorIds, setNewReleaseTutorIds] = useState(newTutors)
    const [recommendedTutorIds, setRecommendedTutorIds] = useState(recommendedTutors)
    function addLearningTutor(tutorId) {
        console.log('addLearningTutor', tutorId, learningTutorIds)
        var newData = new Set(learningTutorIds.add(tutorId))
        setLearningTutorIds(newData)
    }
    return (
        <TutorsContext.Provider
            value={{
                tutors,
                setTutors,
                learningTutorIds,
                setLearningTutorIds,
                newReleaseTutorIds,
                setNewReleaseTutorIds,
                recommendedTutorIds,
                setRecommendedTutorIds,
                addLearningTutor,
                tutorIds,
            }}>
            {props.children}
        </TutorsContext.Provider>
    )
}

export { TutorsContext, TutorsProvider }
