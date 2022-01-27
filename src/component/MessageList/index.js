import React, { useEffect, useRef } from 'react';
import { Message } from '../Message';
import styles from './MessageList.module.css';

export const MessageList = ({ messageList }) => {
    const bottomMessageList = useRef(null);

    useEffect(() => {
        // скролл вниз на последнее сообщение списка
        bottomMessageList.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messageList]);

    return (
        <div className={styles.messages}>
            {
                messageList.map(message =>
                    <Message key={message.id}
                        author={message.author} text={message.text} date={message.date.toLocaleString()} />)
            }
            <div ref={bottomMessageList} class={styles.bottom} />
        </div>
    )
}
