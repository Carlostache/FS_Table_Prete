import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import restaurantsReducer from "./restaurant_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    restaurants: restaurantsReducer
});

export default entitiesReducer;