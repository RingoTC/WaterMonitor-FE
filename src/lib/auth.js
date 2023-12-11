import axios from 'axios';

const API_BASE = process.env.REACT_APP_BACKEND || 'http://localhost:9000';

const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const requestLogin = () => ({ type: LOGIN_REQUEST });
const receiveLogin = user => {
    return { type: LOGIN_SUCCESS, user };
};
const loginError = message => ({ type: LOGIN_FAILURE, message });

export default function auth(state = {
    isFetching: false,
    isAuthenticated: false,
    user: null,
    errorMessage: ''
}, action){
    switch (action.type) {
        case LOGIN_REQUEST:
            return{
                ...state,
                isFetching: true,
                isAuthenticated: false,
                user:null,
                errorMessage: ''
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: true,
                user: action.user,
                errorMessage: ''
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
                user: null,
                errorMessage: action.message
            };
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
}

// export const loginUser = (username, password) => dispatch => {
//     dispatch(requestLogin());
//     return axios.post(`${API_BASE}/auth/login`, { username, password },{ withCredentials: true })
//         .then(response => {
//             dispatch(receiveLogin(response.data.user));
//         })
//         .catch(error => {
//             dispatch(loginError(error.response.data.message));
//         });
// }

export const loginUser = (username, password) => dispatch => {
    dispatch(requestLogin());
    return axios.post(`${API_BASE}/auth/login`, { username, password }, { withCredentials: true })
        .then(response => {
            dispatch(receiveLogin(response.data.user));
        })
        .catch(error => {
            const errorMessage = error.response ? error.response.data.message : error.message;
            dispatch(loginError(errorMessage));
        });
};

export const logoutUser = () => dispatch => {
    return axios.get(`${API_BASE}/auth/logout`, {}, { withCredentials: true })
        .then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS' });
        })
        .catch(error => {
            console.error('Logout error:', error);
        });
};