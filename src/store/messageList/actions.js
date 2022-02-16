import { AUTHOR_BOT } from '../../const';
import { messagesRef } from '../../firebase';

import { getTimerId } from './selectors';

export const ADD_MESSAGE = 'MESSAGE_LIST::ADD_MESSAGE';
export const DELETE_MESSAGES_BYCHATID = 'MESSAGE_LIST::DELETE_MESSAGES_BYCHATID';

export const ADD_TIMERID = 'MESSAGE_LIST::ADD_TIMERID';
export const DELETE_TIMERID = 'MESSAGE_LIST::DELETE_TIMERID';

export const addMessageAction = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: { chatId: chatId, message: message }
});

export const deleteMessagesByChatIdAction = (chatId) => ({
    type: DELETE_MESSAGES_BYCHATID,
    payload: chatId
});

export const deleteTimer = (dispatch, getState) => {
    const timerId = getTimerId(getState());
    if (timerId > 0) {
        clearTimeout(timerId);
        dispatch(deleteTimerIdAction());
    }
}

export const addMessageWithThunkAction = (chatId, message) => (dispatch, getState) => {
    deleteTimer(dispatch, getState);

    dispatch(addMessageAction(chatId, message));

    if (message.author !== AUTHOR_BOT) {
        const timerId = setTimeout(() => {
            dispatch(addMessageCommand(chatId, AUTHOR_BOT, `Hello! It's a ${AUTHOR_BOT}`));
        }, 1500);
        dispatch(addTimerIdAction(timerId));
    }
}

export const addTimerIdAction = (timerId) => ({
    type: ADD_TIMERID,
    payload: timerId
});

export const deleteTimerIdAction = () => ({
    type: DELETE_TIMERID,
    payload: 0
});


export const addMessageCommand = (chatId, author, text) => (dispatch) => {
    messagesRef.child(chatId).push({ author: author, text: text, date: Date.now() }, error => {
        if (error)
            console.log(error);
    })
}

export const addMessageTracker = (chatId) => (dispatch) => {
    messagesRef.child(chatId).on('child_added', snapshot => {
        dispatch(addMessageWithThunkAction(chatId, { ...snapshot.val(), id: snapshot.key }));
    })
}

export const addMessageOffTracker = (chatId) => (dispatch) => {
    dispatch(deleteMessagesByChatIdAction(chatId));
    messagesRef.child(chatId).off('child_added');
}