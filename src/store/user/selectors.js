export const getUserFromReducer = (state) => state.userReduser;

export const getUser = (state) => getUserFromReducer(state).user;
export const isUserLoggedIn = (state) => getUser(state) !== null;
