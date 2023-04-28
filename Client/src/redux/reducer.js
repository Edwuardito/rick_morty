import { ADD_FAV, REMOVE_FAV } from "./actionTypes"

const initialState = {
    myFavorites: []
}
export const reducer = (state = initialState,{type,payload})=>{
    switch (type) {
        case ADD_FAV:
            return{
                ...state,
                myFavorites: payload
            }
            
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: payload
            }

        default:
            return{
                ...state
            }
            
    }
}
