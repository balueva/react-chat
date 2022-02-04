import React from 'react';
import { MessageList, NewMessageForm, MenuChat } from '../../component';

import { useSelector, useDispatch } from 'react-redux';
import { getMessageListByChatId } from '../../store/messageList';
import { addMessageWithThunkAction } from '../../store/messageList';

export const Chat = ({ chat }) => {

    const messageList = useSelector(getMessageListByChatId(chat.id));
    const dispatch = useDispatch();

    const addMessage = (author, text) => {
        dispatch(addMessageWithThunkAction(chat.id, author, text));
    };

    return (
        <>
            <MenuChat chat={chat}></MenuChat>
            <MessageList messageList={messageList} />
            <NewMessageForm addMessage={addMessage}></NewMessageForm>
        </>
    );
}
