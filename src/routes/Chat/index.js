import React, { useEffect } from 'react';
import { MessageList, NewMessageForm } from '../../component';
import { AUTHOR_BOT } from '../../const';
import { Avatar, Typography, AppBar, Toolbar, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import { useSelector, useDispatch } from 'react-redux';
import { getMessageListByChatId } from '../../store/messageList';
import { addMessageAction } from '../../store/messageList';

export const Chat = ({ chat }) => {

    const messageList = useSelector(getMessageListByChatId(chat.id));
    const dispatch = useDispatch();

    useEffect(() => {
        const botAnswer = setTimeout(() => {
            if (messageList.length > 0 && messageList[messageList.length - 1].author !== AUTHOR_BOT)
                addMessage(AUTHOR_BOT, `Hello! It's a ${AUTHOR_BOT}`);
        }, 1500);

        return () => { clearTimeout(botAnswer) };
    }, [messageList]); // eslint-disable-line react-hooks/exhaustive-deps

    const addMessage = (author, text) => {
        const newMessage = { id: uuidv4(), author: author, text: text, date: new Date() };
        dispatch(addMessageAction(chat.id, newMessage));
    };

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
