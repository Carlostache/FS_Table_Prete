import * as APIUtil from '../util/reservation_api_util';

export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";
export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS";
export const CLEAR_RESERVATIONS = "CLEAR_RESERVATIONS";

const receiveReservation = reservation => ({
    type: RECEIVE_RESERVATION,
    reservation
});

const receiveReservations = reservations => ({
    type: RECEIVE_RESERVATIONS,
    reservations
});

const removeReservation = reservationId => ({
    type: REMOVE_RESERVATION,
    reservationId
});

export const clearReservations = () => ({
    type: CLEAR_RESERVATIONS,
})

export const fetchReservations = (data) => dispatch => {
    return APIUtil.fetchReservations(data)
        .then(reservations => {
            dispatch(receiveReservations(reservations))
        });
};

export const requestReservation = (reservationId) => dispatch => {
    return APIUtil.fetchReservation(reservationId)
        .then(reservation => {
            dispatch(receiveReservation(reservation))
        });
};

export const createReservation = (reservation) => dispatch => {
    return (
        APIUtil.createReservation(reservation)
            .then(
                reservation => dispatch(receiveReservation(reservation))
            ));
};

export const deleteReservation = (reservationId) => dispatch => {
    return APIUtil.deleteReservation(reservationId)
        .then(() => dispatch(removeReservation(reservationId)));
};

export const updateReservation = (reservation) => dispatch => {
    return APIUtil.updateReservation(reservation)
        .then(reservation => dispatch(receiveReservation(reservation)));
}
