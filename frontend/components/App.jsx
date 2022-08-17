import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import SplashPageContainer from "./splash_page/splash_page_container";
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';

const App = () => (
    <div>
        <header>
            <h1>Welcome to Table Prête</h1>
            <SplashPageContainer />
        </header>

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignUpFormContainer} />
    </div>
);

export default App;