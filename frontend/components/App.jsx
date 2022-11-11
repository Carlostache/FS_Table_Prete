import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import Modal from './modal/modal';
import SplashPageContainer from "./splash_page/splash_page_container";
import RestaurantShowContainer from "./restaurant_show/restaurant_show_container";
import RestaurantIndexContainer from "./restaurant_index/restaurant_index_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ReservationConfirmation from "./reservations/reservation_confirmation";
import ReservationUpdate from "./reservations/reservation_update";

import UserReservationsContainer from "./user_reservations/user_reservation_container";


const App = () => (
    <div>
        <Modal />

        <header className="splash-bar">
            <Link to="/"   className="header-link">
                <img className="open-table-logo" src={window.smallOpenTableLogo} />
                <h1 className='splash-link'>Table Prête</h1>
                <img className='location-icon' src={window.smallLocation} />
                <h2 className='new-york-location'> New York / Tri-State Area </h2> 
            </Link>
            <SplashPageContainer />
        </header>
        <Switch>
            <Route exact path="/" component={RestaurantIndexContainer} />
            <Route path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
            <Route exact path="/reservation/:reservationId/confirmation" component={ReservationConfirmation} />
            <Route exact path="/reservation/:reservationId/confirmation/update" component={ReservationUpdate} />
            <Route exact path="/user/:userId/reservations/" component={UserReservationsContainer} />
        </Switch>
    </div>
);

export default App;