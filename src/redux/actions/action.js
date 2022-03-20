import httpInstance from "../../axiosConfig/axiosConfig"
import { ADD_DATA, DELETE_DATA, FETCH_DATA, UPDATE_DATA } from "../constants/constants"

export const fetchData = () => {
    return async (dispatch) => {
        const response = await httpInstance.get('posts')
        dispatch({ type: FETCH_DATA, payload: response.data })
    }
}

export const deleteData = (id) => {
    return async (dispatch) => {
        const response = await httpInstance.delete(`posts/${id}`)
        console.log(response);
        dispatch({ type: DELETE_DATA })
        dispatch(fetchData())
    }
}

export const updateData = (id, data) => {
    return async (dispatch) => {
        const response = await httpInstance.put(`posts/${id}`, data)
        console.log(response);
        dispatch({ type: UPDATE_DATA })
        dispatch(fetchData())
    }
}

export const addData = (data) => {
    return async (dispatch) => {
        const response = await httpInstance.post('/posts', data)
        console.log(response)
        dispatch({ type: ADD_DATA })
        dispatch(fetchData())
    }
}

