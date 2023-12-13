import axios from 'axios';

const API_BASE = process.env.NEXT_PUBLIC_BACKEND;

const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS';
const requestLogin = () => ({ type: LOGIN_REQUEST });
const receiveLogin = user => {
    return { type: LOGIN_SUCCESS, user };
};
const loginError = message => ({ type: LOGIN_FAILURE, message });
const fetchAuthSuccess = user => ({ type: FETCH_AUTH_SUCCESS, user });  // New action creator


export default function auth(state = {
    isFetching: false,
    isAuthenticated: false,
    user: null,
    errorMessage: ''
}, action){
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return{
                ...state,
                isFetching: true,
                isAuthenticated: false,
                user:null,
                errorMessage: ''
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isFetching: false,
                isAuthenticated: true,
                user: action.user,
                errorMessage: ''
            };
        case 'LOGIN_FAILURE':
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
        case 'FETCH_AUTH_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                user: action.user,
                errorMessage: ''
            };
        default:
            return state;
    }
}

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

export const fetchAuth = () => dispatch => {
    return axios.get(`${API_BASE}/auth/checkAuth`, { withCredentials: true })
        .then(response => {
            dispatch(fetchAuthSuccess(response.data.user));
        })
        .catch(error => {
            console.error('Fetch auth error:', error);
        });
};