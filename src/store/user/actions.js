import { auth } from '../../firebase';

export const LOGIN_USER = 'USER::LOGIN';
export const LOGOUT_USER = 'USER::LOGOUT';


export const loginUserAction = (user) => ({
    type: LOGIN_USER,
    payload: user
});

export const logoutUserAction = () => ({
    type: LOGOUT_USER
});


export const initAuthUserAction = (dispatch) => {
    auth.onAuthStateChanged((user) => {
        if (user)
            dispatch(loginUserAction(user));
        else
            dispatch(logoutUserAction());
    });
};