import React from 'react';
import { MessageList, NewMessageForm } from '../../component';
import { Avatar, Typography, AppBar, Toolbar, Box } from '@mui/material';

export const Chat = ({ chat, messageList, addMessage }) => {
    if (!chat)
        return <div>No Chat</div>;

    return (
        <>
            <AppBar position='static' color='success'>
                <Toolbar>
                    <Avatar alt={chat.caption} src={'/img/' + chat.avatar} />
                    <Typography sx={{ marginLeft: '18px' }}>{chat.caption}</Typography>
                    <Box sx={{ flexGrow: 1 }}></Box>
                </Toolbar>
            </AppBar>

            <MessageList messageList={messageList} />
            <NewMessageForm addMessage={addMessage}></NewMessageForm>
        </>
    );
}
