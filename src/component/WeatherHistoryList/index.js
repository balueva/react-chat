import React from 'react';
import { Box, Card, CardContent, LinearProgress, Typography, Avatar } from '@mui/material';


export const WeatherHistoryList = ({ weather }) => {
    return (
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
    )
}