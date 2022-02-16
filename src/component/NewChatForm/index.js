import React, { useState, useCallback, useRef, useEffect } from 'react';

import { TextField, Button, Paper } from '@mui/material';

export const NewChatForm = ({ addChat, cancelAddChat, visible }) => {

    const [textareaValue, setTextareaValue] = useState('');

    const onTextareaChange = useCallback((event) => {
        setTextareaValue(event.target.value)
    }, []);

    const refTextarea = useRef(null);

    useEffect(() => {
        if (visible)
            refTextarea.current?.focus();
    }, [visible]);

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
        <Paper variant='outlined' square component='form' onSubmit={btnOkClick} style={!visible ? { display: 'none' } : {}}>
            <TextField id='standard-basic' label='Наименование чата' variant='standard' fullWidth
                value={textareaValue} onChange={onTextareaChange} inputRef={refTextarea} />
            <Button variant='outlined' type='submit'>ОК</Button>
            <Button variant='outlined' type='cancel' onClick={btnCancelClick}>Отмена</Button>
        </Paper>
    )
}