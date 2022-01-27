import React from 'react';
import { Message } from '../Message';
import styles from './MessageList.module.css';

export const MessageList = ({ messageList }) => {
    return (
        <div className={styles.messages}>
            {
                messageList.map(message =>
                    <Message key={message.id}
                        author={message.author} text={message.text} date={message.date.toLocaleString()} />)
            }

        </div>
    )
}
