import React, { useState, useCallback } from 'react';

import { TextField, Button } from '@mui/material';

export const NewChatForm = ({ addChat, cancelAddChat, visible }) => {

    const [textareaValue, setTextareaValue] = useState('');

    const onTextareaChange = useCallback((event) => {
        setTextareaValue(event.target.value)
    }, []);

    const btnOkClick = (event) => {
        event.preventDefault();

        addChat(textareaValue);
        setTextareaValue('');
    }

    const btnCancelClick = (event) => {
        event.preventDefault();

        cancelAddChat();
        setTextareaValue('');
    }

    return (
        <form variant='outlined' square component='form' onSubmit={btnOkClick} style={!visible ? { display: 'none' } : {}}>
            <TextField id='standard-basic' label='Наименование чата' variant='standard' fullWidth
                value={textareaValue} onChange={onTextareaChange} autoFocus />
            <Button variant='outlined' type='submit'>ОК</Button>
            <Button variant='outlined' type='cancel' onClick={btnCancelClick}>Отмена</Button>
        </form>
    )
}