export const ADD_MESSAGE = 'MESSAGE_LIST::ADD_MESSAGE';
export const DELETE_MESSAGES_BYCHATID = 'MESSAGE_LIST::DELETE_MESSAGES_BYCHATID';

export const addMessageAction = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: { chatId: chatId, message: message }
});

export const deleteMessagesByChatIdAction = (chatId) => ({
    type: DELETE_MESSAGES_BYCHATID,
    payload: chatId
});