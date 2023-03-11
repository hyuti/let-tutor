import { authState } from "../auth/state"
import { courseState } from "../course/state"
import { userState } from "../user/state"
import { instructorState } from "../instructor/state"
import SupportedLocale from '../../locale/locale'

const appState = () => {
    return {
        language: SupportedLocale.en,
        authState: authState(),
        courseState: courseState(),
        userState: userState(),
        instructorState: instructorState(),
    }
}

export { appState }