export const getChatListFromReducer = (state) => state.chatListReducer;

export const getChatList = (state) => getChatListFromReducer(state).chatList;