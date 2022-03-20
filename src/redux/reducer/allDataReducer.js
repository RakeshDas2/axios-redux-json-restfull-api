import { ADD_DATA, DELETE_DATA, FETCH_DATA, UPDATE_DATA } from "../constants/constants"

const initialState = {
    posts: []
}

const allDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                posts: action.payload
            }
        case DELETE_DATA:
            return {
                ...state
            }

        case UPDATE_DATA:
            return {
                ...state
            }
        case ADD_DATA:
            return {
                ...state
            }
        default: return state
    }
}

export default allDataReducer