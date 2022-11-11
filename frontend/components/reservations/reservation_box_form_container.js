import { connect } from "react-redux";
import ReservationForm from "./reservation_box_form";
import {
  requestReservation,
  createReservation,
  deleteReservation,
} from "../../actions/reservation_actions";
import { withRouter } from "react-router-dom";
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
      // console.log(state.errors.submitForm);
  return {
    reservation: {
      date: "",
      time: "",
      partySize: "",
      restaurant_id: ownProps.restaurant_id,
    },
    currentUser: state.session.id,
    };
};

const mDTP = (dispatch) => {
    return {
      requestReservation: (reservationId) =>
        dispatch(requestReservation(reservationId)),
      createReservation: (reservation) => {
        dispatch(createReservation(reservation));
      },
      deleteReservation: (reservationId) =>
        dispatch(deleteReservation(reservationId)),
    openModal: (modal) => dispatch(openModal(modal))
    };
};

export default withRouter(connect(mSTP, mDTP)(ReservationForm));