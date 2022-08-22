import { RECEIVE_RESTAURANT, RECEIVE_RESTAURANTS } from "../actions/restaurant_actions";

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state)

    switch(action.type) {
        case RECEIVE_RESTAURANTS:
            return action.restaurants;
        
        case RECEIVE_RESTAURANT:
            const newState = { [action.restaurant.id]: action.restaurant }
            return newState;

        default:
            return state;
    }
};

export default restaurantsReducer;