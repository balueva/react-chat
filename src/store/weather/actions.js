import { api } from '../../endpoints/services';

export const SET_ERROR_WEATHER = 'WEATHER::SET_ERROR';
export const SET_DATA_WEATHER = 'WEATHER::SET_DATA';
export const SET_ISLOADING_WEATHER = 'WEATHER::SET_ISLOADING';

export const setErrorAction = (error) => ({
    type: SET_ERROR_WEATHER,
    payload: error
})

export const setDataAction = (data) => ({
    type: SET_DATA_WEATHER,
    payload: data
});

export const setIsLoadingAction = (isLoading) => ({
    type: SET_ISLOADING_WEATHER,
    payload: isLoading
});

const WEATHER_API = '';

export const getWeaherWithThunk = (city, beginDate, endDate) => async (dispatch, getState) => {
    dispatch(setErrorAction(false));
    dispatch(setIsLoadingAction(true));
    dispatch(setDataAction({}));

    try {
        const response = await api.getHistory(city, beginDate, endDate);

        if (!response.ok)
            throw new Error('Weather not loading');

        console.log('response ok ' + response.ok);
        const result = await response.json();

        dispatch(setDataAction({ location: result.location, forecast: result.forecast }))
    }
    catch (e) {
        dispatch(setErrorAction(true));
        console.log(e);
    }

    dispatch(setIsLoadingAction(false));
}