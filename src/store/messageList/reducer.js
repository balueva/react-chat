import { ADD_MESSAGE, DELETE_MESSAGES_BYCHATID } from './actions';

const initialState = { messageList: { '1': [{ id: 1, text: 'aaa', author: 'aaaa', date: 'asd' }] } };

export const messageListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const messageList = state.messageList[action.payload.chatId] ? [...state.messageList[action.payload.chatId]] : [];
            return {
                ...state, messageList: {
                    ...state.messageList,
                    [action.payload.chatId]: [...messageList, action.payload.message]
                }
            };
        }
        case DELETE_MESSAGES_BYCHATID: {
            if (state.messageList[action.payload]) {
                const messageList = { ...state.messageList };
                delete messageList[action.payload];
                return { ...state, messageList: messageList };
            }
            else return state;
        }

        default: return state;
    }
}