
// export const fetchReservations = () => (
//     $.ajax({
//       method: 'GET',
//       url: 'api/reservations'
//     })
// );

export const fetchReservation = id => (
    $.ajax({
      method: 'GET',
      url: `api/reservations/${id}`
    })
);

export const fetchReservations = data => (
  $.ajax({
    method: 'GET',
    url: `api/reservations/`,
    data
  })
);

export const createReservation = (reservation) =>
  $.ajax({
    url: "/api/reservations",
    method: "POST",
    data: { reservation },
});

export const deleteReservation = (reservationId) => {
  return $.ajax({
    url: `/api/reservations/${reservationId}`,
    method: "DELETE",
  });
};

export const updateReservation = (reservation) => {
  return $.ajax({
    url: `/api/reservations/${reservation.id}`,
    method: "PATCH",
    data: { reservation },
  });
};

