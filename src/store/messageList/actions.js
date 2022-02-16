import { AUTHOR_BOT } from '../../const';
import { v4 as uuidv4 } from 'uuid';

import { getTimerId } from './selectors';

export const ADD_MESSAGE = 'MESSAGE_LIST::ADD_MESSAGE';
export const DELETE_MESSAGES_BYCHATID = 'MESSAGE_LIST::DELETE_MESSAGES_BYCHATID';

export const ADD_TIMERID = 'MESSAGE_LIST::ADD_TIMERID';
export const DELETE_TIMERID = 'MESSAGE_LIST::DELETE_TIMERID';

export const addMessageAction = (chatId, author, text) => ({
    type: ADD_MESSAGE,
    payload: { chatId: chatId, message: { id: uuidv4(), author: author, text: text, date: Date.now() } }
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

export const addMessageWithThunkAction = (chatId, author, text) => (dispatch, getState) => {
    deleteTimer(dispatch, getState);

    dispatch(addMessageAction(chatId, author, text));

    if (author !== AUTHOR_BOT) {
        const timerId = setTimeout(() => {
            dispatch(addMessageAction(chatId, AUTHOR_BOT, `Hello! It's a ${AUTHOR_BOT}`));
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
