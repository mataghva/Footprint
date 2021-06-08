import * as  SessionAPIUtil from '../utils/session_api_util'

// fetchUsers()
// signup(user)
// updateUser(user)
// login(user)
// logout()

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
});

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const fetchUsers = () => dispatch => {
    return SessionAPIUtil.fetchUsers()
        .then((users) => (dispatch(receiveAllUsers(users))))
};

export const signup = (formUser) => dispatch => {
    return SessionAPIUtil.signup(formUser)
        .then((user) => (dispatch(receiveCurrentUser(user))))
        .fail(errors => (dispatch(receiveErrors(errors.responseJSON))));
};

export const login = (formUser) => dispatch => {
    return SessionAPIUtil.login(formUser)
        .then((user) => (dispatch(receiveCurrentUser(user))))
        .fail(errors => (dispatch(receiveErrors(errors.responseJSON))));
};

export const logout = () => dispatch => {
    return SessionAPIUtil.logout()
        .then(() => (dispatch(logoutCurrentUser())))
        .fail(errors => (dispatch(receiveErrors(errors.responseJSON))));
};