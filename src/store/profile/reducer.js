import { AUTHOR_USER } from '../../const';
import { CHANGE_SHOWNAME } from './actions';

const initialSate = {
    showName: false,
    name: AUTHOR_USER
};

export const profileReducer = (state = initialSate, action) => {
    switch (action.type) {
        case CHANGE_SHOWNAME:
            return { ...state, showName: action.payload };
        default: return state;
    }
}