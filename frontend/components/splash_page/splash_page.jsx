import React from "react";
import { Link } from "react-router-dom";

const SplashPage = ({ currentUser, logout }) => {

    const sessionLinks = () => (
        <nav className='login-signup'>
            <Link to='/login'>Login</Link>
            &nbsp;or&nbsp;
            <Link to='/signup'>Sign Up!</Link>
        </nav>
    );
    const currentUserGreeting = () => (
        <hgroup className='header-group'>
            <h2 className='header-name'>Hello, {currentUser.username}!</h2>
            <button className='header-button' onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? currentUserGreeting() : sessionLinks();
};

export default SplashPage;