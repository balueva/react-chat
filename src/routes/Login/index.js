import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { TextField, Button, Paper, Typography, Alert, Stack } from '@mui/material';
import { auth } from '../../firebase';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { push } = useHistory();

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            await auth.signInWithEmailAndPassword(email, password);
            push('/profile');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Paper component='form' onSubmit={onSubmit} sx={{ width: 360 }} p={2}>
            <Typography variant='caption' display='block'>
                Fill in the form below to login to your account.
            </Typography>

            <TextField required label='Email' variant='standard' type='email' display='block'
                value={email} onChange={onEmailChange} />
            <TextField required label='Password' variant='standard' type='password'
                value={password} onChange={onPasswordChange} />

            <Stack mb={2} mt={2}>
                {error && <Alert severity='error'>{error}</Alert>}
                <Button type='submit' variant='outlined' sx={{ width: 'fit-content' }}>Login</Button>
            </Stack>

            <Typography variant='caption' display='block'>
                Don't have an account? <Link to='/registration'>Registration</Link>
            </Typography>
        </Paper>
    );
};

