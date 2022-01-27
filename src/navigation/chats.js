export const getChatsLink = () => '/chats';
export const getChatByIdLink = (chatId = ':chatId') => `${getChatsLink()}/${chatId}`;