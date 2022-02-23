import { initialState, chatListReducer } from './reducer';
import { addChatAction, deleteChatAction } from './actions';
import { getChatObject } from '../../routes/Chats';

describe('chatListReducer', () => {

    it('вызов редьюсера без параметров должен вернуть initialState', () => {
        const result = chatListReducer();

        expect(result).toEqual(initialState);
    });

    it('добавление чата в конец списка', () => {
        const newChat = getChatObject('new chat');
        const result = chatListReducer(undefined, addChatAction(newChat));

        expect(result).toEqual({ chatList: [newChat] });
    });

    it('удаление чата из списка', () => {
        const chats = {
            chatList: [
                { ...getChatObject('chat-1'), id: '1' },
                { ...getChatObject('chat-2'), id: '2' },
                { ...getChatObject('chat-3'), id: '3' }
            ]
        };
        const expectedResult = { chatList: chats.chatList.filter(item => item.id !== '2') };
        const result = chatListReducer(chats, deleteChatAction('2'));

        expect(result).toEqual(expectedResult);
    })
});