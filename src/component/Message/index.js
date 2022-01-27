import React from 'react';
import styles from './Message.module.css';

export const Message = ({ author, text, date }) => {
    return (
        <div className={styles.message}>
            <span>{author}</span>
            <p>{text}</p>
            <span>{date}</span>
        </div>
    );
}
