import React from 'react';
import styles from './Message.module.css';

import { Card, CardContent, Typography } from '@mui/material';

export const Message = ({ author, text, date }) => {
    return (
        <Card className={styles.message}>
            <CardContent>
                <Typography color='green'>
                    {author}
                </Typography>
                <Typography className={styles.text} variant='body2'>
                    {text}
                </Typography>
                <Typography color='green' sx={{ fontSize: 10 }}>
                    {date}
                </Typography>
            </CardContent>
        </Card>
    );
}
