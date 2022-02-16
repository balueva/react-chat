import { SET_DATA_WEATHER, SET_ERROR_WEATHER, SET_ISLOADING_WEATHER } from ".";

const initialState = { data: {}, error: false, isLoading: false }

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_WEATHER:
            return { ...state, data: action.payload }
        case SET_ERROR_WEATHER:
            return { ...state, error: action.payload }
        case SET_ISLOADING_WEATHER:
            return { ...state, isLoading: action.payload }
        default:
            return state;
    }
}