import React from "react";
import { Link } from "react-router-dom";
import UserReservationItem from "./user_reservation_item";
import { withRouter } from "react-router-dom";

class UserReservations extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
            // this.props.clearReservations();
            this.props.fetchReservations({["user_id"]: this.props.currentUser});
    }

    componentDidUpdate(prevProps){
        if (this.props.reservations.length !== prevProps.reservations.length){
            this.props.fetchReservations({["user_id"]: this.props.currentUser});
        }    
    }

    render(){
        if (!this.props.reservations) return null;

        const { reservations, currentUser, deleteBooking } = this.props;
        const upcomingBookings = reservations.filter(booking => new Date(booking.date) > new Date());
        // debugger
        const upcomingBookingList = upcomingBookings.length > 0 ? (upcomingBookings.map((booking, idx) => <UserReservationItem key={idx} 
        booking={booking} currentUser={currentUser} deleteBooking={deleteBooking} />)) : (<div className="no-content"><h3>You have no upcoming reservations</h3></div>)

        const pastBookings = reservations.filter(booking => new Date(booking.date) < new Date());

        const pastBookingList = pastBookings.length > 0 ? (pastBookings.map((booking, idx) => <UserReservationItem key={idx} 
        booking={booking} currentUser={currentUser} deleteBooking={deleteBooking} />)) : (<div className="no-content"><h3>You have no past reservations</h3></div>)

        const bookingContent = reservations.length > 1 ? (
            <div>
                <div className="sub-header-booking">Upcoming</div>
                {upcomingBookingList}
                <div className="sub-header-booking">Past</div>
                {pastBookingList}
            </div>
        ) : (
            <div className="no-content"><h3>You have no reservations</h3></div>
        )

        return (
            <div className="review-bg">
                <ul>
                    <div className="my-bookings"><h3>My Reservations</h3></div>
                    {bookingContent}
                </ul>
            </div>
        )
    }

}

export default UserReservations;