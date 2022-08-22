import React from "react";
import { Link } from "react-router-dom";
import DropdownMenuContainer from "../user_components/user_dropdown_container"




const SplashPage = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className='login-signup'>
            <button className='signup-button' onClick={() => openModal('signup')}>Sign up</button>
            &nbsp;
            <button className='login-button' onClick={() => openModal('login')}>Sign in</button>
            &nbsp;
            <img className='search-button' src={window.smallSearch} />
        </nav>
    );
    const currentUserGreeting = () => (
        <hgroup className='header-group'>
            {/* <h2 className='header-name'>{currentUser.username}</h2>
            <button className='header-button' onClick={logout}>Log Out</button> */}
            &nbsp;
            <img className='search-button' src={window.smallSearch} />
            <img className='notification-button' src={window.smallNotification} />
            <img className='calendar-button' src={window.smallCalendar} />
            <button onClick={logout}><img className='user-button' src={window.smallUser} /></button>

        </hgroup>
    );

    return currentUser ? currentUserGreeting(currentUser, logout) : sessionLinks();
};

export default SplashPage;