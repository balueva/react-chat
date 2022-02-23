import React from 'react';
import { Stack, Alert, Button } from '@mui/material';

export const ErrorTestIds = {
    btn: 'btn'
}
export const Error = ({ errorText, buttonCaption, buttonClick }) => {

    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity='error'
                action={
                    <Button color='inherit' size='small' onClick={buttonClick} data-testid={ErrorTestIds.btn}>
                        {buttonCaption}
                    </Button>
                }
            >
                {errorText}
            </Alert>
        </Stack>
    )
};