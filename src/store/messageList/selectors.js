export const getMessageListFromReducer = (state) => state.messageListReducer;

export const getMessageListByChatId = (chatId) => (state) =>
    getMessageListFromReducer(state).messageList[chatId] || [];

export const getTimerId = (state) => getMessageListFromReducer(state).timerId;