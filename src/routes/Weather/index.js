import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Error, WeatherHistoryList } from '../../component';
import { Box, LinearProgress } from '@mui/material';

import { getWeaherWithThunk, getWeatherData, getWeatherError, getWeatherIsLoading } from '../../store/weather';

export const Weather = () => {

    const dispatch = useDispatch();

    const weather = useSelector(getWeatherData);
    const error = useSelector(getWeatherError);
    const isLoading = useSelector(getWeatherIsLoading);

    useEffect(() => {
        dispatch(getWeaherWithThunk('London', '2022-02-08', '2022-02-11'));
    }, []);


    const onReloadClick = (event) => {
        dispatch(getWeaherWithThunk('London', '2022-02-08', '2022-02-11'));
    }

    return (
        <>
            {
                error &&
                <Error errorText={'Ошибка загрузки данных'} buttonCaption={'Перезагрузить'} buttonClick={onReloadClick}></Error>
            }


            {
                isLoading &&
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
            }

            {
                weather.location && weather.forecast &&
                <WeatherHistoryList weather={weather} />
            }
        </>
    )
}

