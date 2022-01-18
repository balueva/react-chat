import React, { useCallback, useState } from 'react';
import styles from './NewMessageForm.module.css';
import { AUTHOR_USER } from '../../const';

export const NewMessageForm = ({ addMessage }) => {

    const [textareaValue, setTextareaValue] = useState('');

    /*
    const onTextareaChange = (event) => {
        setTextareaValue(event.target.value);
    };
*/

    const onTextareaChange = useCallback((event) => {
        setTextareaValue(event.target.value)
    }, []);

    const onAddMessage = (event) => {
        event.preventDefault();

        addMessage(AUTHOR_USER, textareaValue);
        setTextareaValue('');
    }

    return (
        <form className={styles.newMessage} onSubmit={onAddMessage}>
            <textarea rows='5' value={textareaValue} onChange={onTextareaChange}></textarea>
            <button type='submit' disabled={textareaValue ? false : true}>
                Отправить
            </button>
        </form>
    )
}