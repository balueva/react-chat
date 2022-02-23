import React, { useEffect } from 'react';
import { MessageList, NewMessageForm, MenuChat } from '../../component';

import { useSelector, useDispatch } from 'react-redux';
import { addMessageCommand, addMessageTracker, addMessageOffTracker, getMessageListByChatId } from '../../store/messageList';

export const Chat = ({ chat }) => {

    const messageList = useSelector(getMessageListByChatId(chat.id));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addMessageTracker(chat.id));

        return () => {
            dispatch(addMessageOffTracker(chat.id));
        }
    }, [chat]);

    const addMessage = (author, text) => {
        dispatch(addMessageCommand(chat.id, author, text));
    };

    return (
        <>
            <MenuChat chat={chat}></MenuChat>
            <MessageList messageList={messageList} />
            <NewMessageForm addMessage={addMessage}></NewMessageForm>
        </>
    );
}
