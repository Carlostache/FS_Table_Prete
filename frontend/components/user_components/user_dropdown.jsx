import React from "react";

import { logout } from "../../actions/session_actions";

const DropdownMenu = () => {
    return (
        <div className="dropdown">
            <span className="currentuser-dropdown">Hello, {currentUser.username}!</span>
        </div>
    )
}



export default DropdownMenu;