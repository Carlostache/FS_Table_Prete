import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { RECEIVE_SESSION_ERRORS, receiveErrors } from './actions/session_actions';

import { fetchRestaurant, fetchRestaurants } from './actions/restaurant_actions'




document.addEventListener("DOMContentLoaded", () => {

    let store;

    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser
    }
    else {
        store = configureStore();
    };

    window.getState = store.getState;

    window.dispatch = store.dispatch

    window.receiveErrors = receiveErrors

    window.fetchRestaurant = fetchRestaurant

    window.fetchRestaurants = fetchRestaurants


    const root = document.getElementById('root');

    ReactDOM.render(<Root store={store} />, root)
});

