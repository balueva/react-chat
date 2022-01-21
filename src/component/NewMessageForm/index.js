import React, { useCallback, useState, useRef } from 'react';
import styles from './NewMessageForm.module.css';
import { AUTHOR_USER } from '../../const';

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

export const NewMessageForm = ({ addMessage }) => {

    const [textareaValue, setTextareaValue] = useState('');
    const refTextarea = useRef(null);

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

        refTextarea.current?.focus();
    }

    return (
        <form className={styles.newMessage} onSubmit={onAddMessage}>
            <TextField inputRef={refTextarea}
                id='outlined-multiline-flexible' multiline rows={3} variant='standard' fullWidth
                color='success'
                value={textareaValue} onChange={onTextareaChange} autoFocus
            />
            <IconButton type='submit' color='success' disabled={textareaValue ? false : true}>
                <SendIcon />
            </IconButton>
        </form>
    )
}
