import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './util/session_api_util';
import configureStore from './store/store';



document.addEventListener("DOMContentLoaded", () => {

    const store = configureStore()

    const root = document.getElementById('root');

    window.login = login;
    window.logout = logout;
    window.signup = signup;

    window.getState = store.getState;
    window.dispatch = store.dispatch;


    ReactDOM.render(<h1>Welcome to Table Prete</h1>, root)
});