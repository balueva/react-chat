import React from 'react';
import { useState, useEffect } from 'react';
import { AUTHOR_BOT } from '../../const';
import { v4 as uuidv4 } from 'uuid';

import { ChatList, NewChatForm } from '../../component';
import { Chat } from '../../routes';
import { useParams } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';


export const Chats = () => {

    const [messageList, setMessageList] = useState([]);
    const [visibleNewChatForm, setVisibleNewChatForm] = useState(false);

    const [chatList, setChatList] = useState([
        { id: '1', caption: 'Школа 2В', statusStr: 'Класс 2В', isGroup: true, avatar: '' },
        { id: '2', caption: 'Школа 2В родители', statusStr: 'Класс 2В только родители', isGroup: true, avatar: 'panda.jpg' },
        { id: '3', caption: 'Liberty school', statusStr: 'Liberty school Famili&Friends-2', isGroup: true, avatar: '' },
        { id: '4', caption: 'Художка', statusStr: '', isGroup: true, avatar: '' },
        { id: '5', caption: 'Лиза', statusStr: '', isGroup: false, avatar: 'pikachu.jpg' },
        { id: '6', caption: 'Вадим', statusStr: '', isGroup: false, avatar: '' },
        { id: '7', caption: 'Ольга', statusStr: '', isGroup: false, avatar: '' }
    ]);

    const { chatId } = useParams();
    const chat = chatId ? chatList.find(item => item.id === chatId) : null;

    const addMessage = (author, text) => {
        const newMessageList = [...messageList, { id: uuidv4(), author: author, text: text, date: new Date() }];
        setMessageList(newMessageList);
    };

    const addChat = (caption) => {
        setVisibleNewChatForm(false);

        const newChatList = [...chatList, { id: uuidv4(), caption: caption, statusStr: '', isGroup: false, avatar: '' }];
        setChatList(newChatList);
    }

    const cancelAddChat = () => {
        setVisibleNewChatForm(false);
    };

    const onAddClick = (event) => {
        setVisibleNewChatForm(true);
    };

    const deleteChat = (deletedId) => {
        //console.log('chatId = ' + deletedId);
        const newChatList = chatList.filter(item => item.id !== deletedId);
        //console.log('newChatList, ' + newChatList);
        setChatList(newChatList);
    };

    useEffect(() => {
        const botAnswer = setTimeout(() => {
            if (messageList.length > 0 && messageList[messageList.length - 1].author !== AUTHOR_BOT)
                addMessage(AUTHOR_BOT, `Hello! It's a ${AUTHOR_BOT}`);
        }, 1500);

        return () => { clearTimeout(botAnswer) };
    }, [messageList]); // eslint-disable-line react-hooks/exhaustive-deps

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
                <ChatList chatList={chatList} chat={chat} deleteChat={deleteChat}></ChatList>
            </div>
            <div className='chatarea'>
                <Chat chat={chat} messageList={messageList} addMessage={addMessage} />
            </div>
        </div>
    );
}


