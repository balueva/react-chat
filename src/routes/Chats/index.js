import React, { useEffect, useState } from 'react';

import { ChatList, NewChatForm, MenuChatList } from '../../component';
import { Chat } from '../../routes';
import { useParams } from 'react-router-dom';

import { getChatList, addChatCommand, deleteChatCommand, deleteChatTracker } from '../../store/chatList';
import { addChatTracker, addChatOffTracker, resetChatsAction } from '../../store/chatList';

import { useDispatch, useSelector } from 'react-redux';
import { deleteMessagesByChatIdAction } from '../../store/messageList';


export const getChatObject = (caption, statusStr = '', isGroup = false, avatar = '') => {
    return { caption: caption, statusStr: statusStr, isGroup: isGroup, avatar: avatar };
}

export const Chats = () => {

    const [visibleNewChatForm, setVisibleNewChatForm] = useState(false);

    const chatList = useSelector(getChatList);
    const dispatch = useDispatch();

    const { chatId } = useParams();
    const chat = chatId ? chatList.find(item => item.id === chatId) : null;

    useEffect(() => {
        dispatch(resetChatsAction());

        dispatch(addChatTracker);
        dispatch(deleteChatTracker)

        return () => {
            dispatch(addChatOffTracker);
            dispatch(deleteChatTracker);
        }
    }, []);

    const addChat = (caption) => {
        setVisibleNewChatForm(false);

        const newChat = getChatObject(caption); // { caption: caption, statusStr: '', isGroup: false, avatar: '' };
        dispatch(addChatCommand(newChat))
    }

    const cancelAddChat = () => {
        setVisibleNewChatForm(false);
    };

    const onAddClick = (event) => {
        setVisibleNewChatForm(true);
    };

    const deleteChat = (deletedId) => {
        dispatch(deleteChatCommand(deletedId));
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

