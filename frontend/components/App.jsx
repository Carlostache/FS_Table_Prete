import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import Modal from './modal/modal';
import SplashPageContainer from "./splash_page/splash_page_container";
import RestaurantShowContainer from "./restaurant_show/restaurant_show_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
    <div>
        <Modal />

        <header className="splash-bar">
            <Link to="/"   className="header-link">
                <img className="open-table-logo" src={window.smallOpenTableLogo} />
                <h1 className='splash-link'>Table Prête</h1>
                <img className='location-icon' src={window.smallLocation} />
            </Link>
            <SplashPageContainer />
        </header>
        <Switch>
            <Route path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
        </Switch>
    </div>
);

export default App;