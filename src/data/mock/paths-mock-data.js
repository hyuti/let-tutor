import { tutorsData } from './tutors-mock-data'
import { DataType } from '../../core/data/data-type'

const allTutor = Array.from(tutorsData.keys())

const pathsData = new Map(Array(60).fill(1).map(
    (value, index) => {
        const id = `${Date.now()}${index}`
        return [
            id, {
                id: id,
                image: 'https://picsum.photos/700',
                name: `React Path ${index}`,
                tutorIds: allTutor.slice(index, index + 9),
                tutorsTime: `1${index}`,
                progress: index,
                introduce: `A ${index} Learning Path is a selection of tutors tied together for learners to progress through, mastering a particular subject or program. It allows you to enroll multiple users in multiple tutors at once saving you valuable time.`,
                type: DataType.Path,
            }
        ]
    }
))

export default pathsData