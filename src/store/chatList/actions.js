export const ADD_CHAT = 'CHAT_LIST::ADD_CHAT';
export const DELETE_CHAT = 'CHAT_LIST::DELETE_CHAT';


export const addChatAction = (chat) => ({
    type: ADD_CHAT,
    payload: chat
});

export const deleteChatAction = (chatId) => ({
    type: DELETE_CHAT,
    payload: chatId
});
