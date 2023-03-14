import React, { PureComponent, useState } from 'react'

const FavouritesContext = React.createContext()


const FavouritesProvider = (props) => {

    const [favouriteTutors, setFavouriteTutors] = useState(new Set())

    const addFavouriteTutor = (tutorId) => {
        console.log('addFavouriteTutor', tutorId)
        var newSet = new Set(favouriteTutors.add(tutorId))
        setFavouriteTutors(newSet)
    }

    const removeFavouriteTutor = (tutorId) => {
        console.log('removeFavouriteTutor', tutorId)
        favouriteTutors.delete(tutorId)
        var newSet = new Set(favouriteTutors)
        setFavouriteTutors(newSet)
    }

    return (
        <FavouritesContext.Provider
            value={{
                favouriteTutors,
                setFavouriteTutors,
                addFavouriteTutor,
                removeFavouriteTutor
            }}>
            {props.children}
        </FavouritesContext.Provider>
    )
}

export { FavouritesContext, FavouritesProvider }