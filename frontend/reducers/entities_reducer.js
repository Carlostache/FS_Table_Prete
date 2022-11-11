import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import restaurantsReducer from "./restaurant_reducer";
import ReservationsReducer from "./reservation_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    restaurants: restaurantsReducer,
    reservations: ReservationsReducer
});

export default entitiesReducer;