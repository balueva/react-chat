import React from 'react';
import { Avatar, Typography, AppBar, Toolbar, Box } from '@mui/material';


export const MenuChat = ({ chat }) => {
    return (
        <AppBar position='static' color='success'>
            <Toolbar>
                <Avatar alt={chat.caption} src={'/img/' + chat.avatar} />
                <Typography sx={{ marginLeft: '18px' }}>{chat.caption}</Typography>
                <Box sx={{ flexGrow: 1 }}></Box>
            </Toolbar>
        </AppBar>
    )
}