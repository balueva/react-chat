import './App.css';
import { MessageList, NewMessageForm } from './component';
import { useState, useEffect } from 'react';
import { AUTHOR_BOT } from './const';

function App() {
  const [messageList, setMessageList] = useState([]);


  const addMessage = (author, text) => {
    const newId = messageList.length > 1 ? messageList[messageList.length - 1].id + 1 : 1;
    const newMessageList = [...messageList, { id: newId, author: author, text: text, date: new Date() }];
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
      <MessageList className='messages' messageList={messageList} />
      <NewMessageForm addMessage={addMessage}></NewMessageForm>
    </div>
  );
}

export default App;
