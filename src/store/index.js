import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { profileReducer } from './profile';
import { chatListReducer } from './chatList';
import { messageListReducer } from './messageList';
import { weatherReducer } from './weather';

import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// создаем объект конфигурации для persist
const persistConfig = {
    key: 'root',
    storage
}

// комбинируем редьюсеры
const rootReducer = combineReducers({
    profileReducer,
    chatListReducer,
    messageListReducer,
    weatherReducer
});

// оборачиваем редьюсеры в persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// создаем store с использованием persistedReducer
export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

// создаем persistor
export const persistor = persistStore(store);