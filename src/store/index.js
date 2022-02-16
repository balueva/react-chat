import { combineReducers, createStore } from 'redux';
import { profileReducer } from './profile';
import { chatListReducer } from './chatList';
import { messageListReducer } from './messageList';

export const store = createStore(
    combineReducers({
        profileReducer,
        chatListReducer,
        messageListReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);