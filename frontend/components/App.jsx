import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import Modal from './modal/modal';
import SplashPageContainer from "./splash_page/splash_page_container";
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
    <div>
        <Modal />
        <header>
            <Link to="/" className="header-link">
                <h1>Welcome to Table Prête</h1>
            </Link>
            <SplashPageContainer />
        </header>
        <Switch>
            
        </Switch>
    </div>
);

export default App;