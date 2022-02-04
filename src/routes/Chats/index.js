import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ChatList, NewChatForm, MenuChatList } from '../../component';
import { Chat } from '../../routes';
import { useParams } from 'react-router-dom';

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


    return (
        <div className='chats'>
            <div className='chatlistarea'>
                <MenuChatList onAddChatClick={onAddClick}></MenuChatList>
                <NewChatForm addChat={addChat} cancelAddChat={cancelAddChat} visible={visibleNewChatForm}></NewChatForm>
                <ChatList selectedChatId={chat ? chat.id : -1} deleteChat={deleteChat}></ChatList>
            </div>
            <div className='chatarea'>
                {
                    (chat && <Chat chat={chat} />) || (!chat && <div>No Chat</div>)
                }
            </div>
        </div>
    );
};

