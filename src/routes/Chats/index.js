import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ChatList, NewChatForm } from '../../component';
import { Chat } from '../../routes';
import { useParams } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

import { getChatList, addChatAction, deleteChatAction } from '../../store/chatList';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMessagesByChatIdAction } from '../../store/messageList';


export const Chats = () => {

    const [visibleNewChatForm, setVisibleNewChatForm] = useState(false);

    const chatList = useSelector(getChatList);
    const dispatch = useDispatch();

    const { chatId } = useParams();
    const chat = chatId ? chatList.find(item => item.id === chatId) : null;

    const addChat = (caption) => {
        setVisibleNewChatForm(false);

        const newChat = { id: uuidv4(), caption: caption, statusStr: '', isGroup: false, avatar: '' };
        dispatch(addChatAction(newChat))
    }

    const cancelAddChat = () => {
        setVisibleNewChatForm(false);
    };

    const onAddClick = (event) => {
        setVisibleNewChatForm(true);
    };

    const deleteChat = (deletedId) => {
        dispatch(deleteChatAction(deletedId));
        dispatch(deleteMessagesByChatIdAction(deletedId));
    };

    const chatArea = () => {
        return chat ? <Chat chat={chat} /> : <div>No Chat</div>;
    }

    return (
        <div className='chats'>
            <div className='chatlistarea'>
                <AppBar position='static' color='success'>
                    <Toolbar>
                        <Box sx={{ flexGrow: 1 }} />
                        <IconButton color='inherit'>
                            <SearchIcon />
                        </IconButton>
                        <IconButton color='inherit' onClick={onAddClick}>
                            <AddIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <NewChatForm addChat={addChat} cancelAddChat={cancelAddChat} visible={visibleNewChatForm}></NewChatForm>
                <ChatList selectedChatId={chat ? chat.id : -1} deleteChat={deleteChat}></ChatList>
            </div>
            <div className='chatarea'>
                {chatArea()}
            </div>
        </div>
    );
};

