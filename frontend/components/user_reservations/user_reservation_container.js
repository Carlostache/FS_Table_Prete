import { connect } from "react-redux";
import UserReservations from "./user_reservations";
import { requestUser } from "../../actions/user_actions";
import { fetchRestaurants } from "../../actions/restaurant_actions";
import { fetchReservations, updateReservation, deleteReservation, clearReservations } from "../../actions/reservation_actions";

const mSTP = (state) => {
  return {
    reservations: Object.values(state.entities.reservations),
    currentUser: state.session.id,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchReservations: (data) => dispatch(fetchReservations(data)),
    updateReservation: (reservation) => dispatch(updateReservation(reservation)),
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId)),
    clearReservations: () => dispatch(clearReservations()),
    requestUser: (userId) => dispatch(requestUser(userId)),
    fetchRestaurants: () => dispatch(fetchRestaurants()),
  };
};

export default connect(mSTP, mDTP)(UserReservations);