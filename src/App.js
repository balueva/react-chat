import './App.css';
import { MessageList, NewMessageForm, ChatList } from './component';
import { useState, useEffect } from 'react';
import { AUTHOR_BOT } from './const';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [messageList, setMessageList] = useState([]);

  const [chatList, setChatList] = useState([
    { id: 1, caption: 'Школа 2В', statusStr: 'Класс 2В', isGroup: true, avatar: '' },
    { id: 2, caption: 'Школа 2В родители', statusStr: 'Класс 2В только родители', isGroup: true, avatar: 'panda.jpg' },
    { id: 3, caption: 'Liberty school', statusStr: 'Liberty school Famili&Friends-2', isGroup: true, avatar: '' },
    { id: 4, caption: 'Художка', statusStr: '', isGroup: true, avatar: '' },
    { id: 5, caption: 'Лиза', statusStr: '', isGroup: false, avatar: 'pikachu.jpg' },
    { id: 6, caption: 'Вадим', statusStr: '', isGroup: false, avatar: '' },
    { id: 7, caption: 'Ольга', statusStr: '', isGroup: false, avatar: '' }
  ]);


  const addMessage = (author, text) => {
    const newMessageList = [...messageList, { id: uuidv4(), author: author, text: text, date: new Date() }];
    setMessageList(newMessageList);
  };


  useEffect(() => {
    const botAnswer = setTimeout(() => {
      if (messageList.length > 0 && messageList[messageList.length - 1].author !== AUTHOR_BOT)
        addMessage(AUTHOR_BOT, `Hello! It's a ${AUTHOR_BOT}`);
    }, 1500);

    return () => { clearTimeout(botAnswer) };
  }, [messageList]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='App'>
      <div className='chatlistarea'>
        <div className='menu'>menu</div>
        <ChatList chatList={chatList}></ChatList>
      </div>
      <div className='chatarea'>
        <div className='menu'>menu</div>
        <MessageList messageList={messageList} />
        <NewMessageForm addMessage={addMessage}></NewMessageForm>
      </div>
    </div>
  );
}

export default App;
