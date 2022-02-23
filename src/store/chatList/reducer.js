import { ADD_CHAT, DELETE_CHAT, RESET_CHATS } from './actions';

/*
const initialSate = {
    chatList: [{ id: '1', caption: 'Школа 2В', statusStr: 'Класс 2В', isGroup: true, avatar: '' },
    { id: '2', caption: 'Школа 2В родители', statusStr: 'Класс 2В только родители', isGroup: true, avatar: 'panda.jpg' },
    { id: '3', caption: 'Liberty school', statusStr: 'Liberty school Famili&Friends-2', isGroup: true, avatar: '' },
    { id: '4', caption: 'Художка', statusStr: '', isGroup: true, avatar: '' },
    { id: '5', caption: 'Лиза', statusStr: '', isGroup: false, avatar: 'pikachu.jpg' },
    { id: '6', caption: 'Вадим', statusStr: '', isGroup: false, avatar: '' },
    { id: '7', caption: 'Ольга', statusStr: '', isGroup: false, avatar: '' }]
};
*/
const initialState = { chatList: [] };

export const chatListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return { ...state, chatList: [...state.chatList, action.payload] }
        case DELETE_CHAT:
            return { ...state, chatList: state.chatList.filter(item => item.id !== action.payload) }
        case RESET_CHATS:
            return initialState;
        default:
            return state;
    }
};