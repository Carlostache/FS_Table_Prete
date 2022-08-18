import React from "react";
import { Link } from "react-router-dom";

const SplashPage = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className='login-signup'>
            <button onClick={() => openModal('login')}>Sign in</button>
            &nbsp;or&nbsp;
            <button onClick={() => openModal('signup')}>Sign up</button>
        </nav>
    );
    const currentUserGreeting = () => (
        <hgroup className='header-group'>
            <h2 className='header-name'>Hello, {currentUser.username}!</h2>
            <button className='header-button' onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? currentUserGreeting(currentUser, logout) : sessionLinks();
};

export default SplashPage;