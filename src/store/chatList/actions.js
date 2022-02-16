import { chatsRef } from '../../firebase';

export const ADD_CHAT = 'CHAT_LIST::ADD_CHAT';
export const DELETE_CHAT = 'CHAT_LIST::DELETE_CHAT';
export const RESET_CHATS = 'CHAT_LIST::RESET';

export const resetChatsAction = () => ({
    type: RESET_CHATS
});

export const addChatAction = (chat) => ({
    type: ADD_CHAT,
    payload: chat
});

export const deleteChatAction = (chatId) => ({
    type: DELETE_CHAT,
    payload: chatId
});

export const addChatCommand = (chat) => {
    chatsRef.push(chat, (error) => {
        if (error)
            console.log(error);
    });
}

export const addChatTracker = (dispatch) => {
    chatsRef.on('child_added', (snaphot) => {
        dispatch(addChatAction({
            ...snaphot.val(),
            id: snaphot.key
        }))
    })
};

export const addChatOffTracker = (dispatch) => {
    dispatch(resetChatsAction());
    chatsRef.off('child_added');
};

export const deleteChatCommand = (chatId) => {
    //console.log('deleteChatCommand ' + chatId);

    chatsRef.child(chatId).remove((error) => {
        if (error)
            console.log(error);
    })
}

export const deleteChatTracker = (dispatch) => {
    chatsRef.on('child_removed', (snapshot) => dispatch(deleteChatAction(snapshot.key)));
}

export const deleteChatOffTracker = (dispatch) => {
    chatsRef.off('child_removed');
}