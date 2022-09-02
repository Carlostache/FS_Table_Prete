
export const fetchReservations = () => (
    $.ajax({
      method: 'GET',
      url: 'api/reservations'
    })
);

export const fetchRestaurant = id => (
    $.ajax({
      method: 'GET',
      url: `api/reservations/${id}`
    })
);