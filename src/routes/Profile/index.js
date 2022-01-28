import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { CHANGE_SHOWNAME } from '../../store/profile';

export const Profile = () => {

    const dispatch = useDispatch();

    const showName = useSelector(state => state.showName);


    const onChangeShowName = (event) => {
        dispatch({ type: CHANGE_SHOWNAME, payload: event.target.checked });
    };

    return (
        <div>
            <h1>PROFILE</h1>
            <FormGroup>
                <FormControlLabel control={<Checkbox checked={showName} onChange={onChangeShowName} />} label='Отображать имя' />
            </FormGroup>
        </div>
    )
}

/*
<FormGroup>
                <FormControlLabel control={<Checkbox checked={showName} onChange={onChangeShowName} />} label='Отображать имя' />
            </FormGroup> */

            // <input type='checkbox' checked={showName} onChange={onChangeShowName} />