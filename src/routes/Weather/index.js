import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Error } from '../../component';
import { Box, Card, CardContent, LinearProgress, Typography, Avatar } from '@mui/material';

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
        dispatch(getWeaherWithThunk);
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
                <Box>
                    <Typography variant='h5' color='primary'>{weather.location.name}</Typography>
                    <Typography variant='h6'>{`${weather.location.region}, ${weather.location.country}`}</Typography>
                    {
                        weather.forecast.forecastday.map(item =>
                            <Card key={item.date_epoch}>
                                <CardContent>
                                    <Typography variant='body1'>{item.date}</Typography>
                                    <Typography variant='body2'>
                                        {`Max = ${item.day.maxtemp_c}℃ Min = ${item.day.mintemp_c}℃ Avg = ${item.day.avgtemp_c}℃`}
                                    </Typography>
                                    <Typography>
                                        {item.day.condition.text}
                                    </Typography>
                                    <Avatar src={item.day.condition.icon}></Avatar>
                                </CardContent>
                            </Card>
                        )
                    }
                </Box>
            }
        </>
    )
}

