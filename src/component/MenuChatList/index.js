import React from 'react';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';


export const MenuChatList = ({ onAddChatClick }) => {
    return (
        <AppBar position='static' color='success'>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton color='inherit'>
                    <SearchIcon />
                </IconButton>
                <IconButton color='inherit' onClick={onAddChatClick}>
                    <AddIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}