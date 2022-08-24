import React from "react";

import { FaMoneyBill, FaConciergeBell, FaTags, FaPhoneAlt } from 'react-icons/fa';
import { MdRestaurant, MdOutlineLocationOn, MdHomeWork, MdAccessTime } from 'react-icons/md';
import { GiLargeDress } from 'react-icons/gi';

import { fetchRestaurant } from "../../actions/restaurant_actions";


class RestaurantShow extends React.Component{

    componentDidMount(){
        this.props.fetchRestaurant(this.props.match.params.restaurantId)
    }

    render() {
        
        let { rest } = this.props;

        if (!rest) {
            return null;
        }

        return (
            <div className="restaurant-show-flex-cont">
                <div className="restaurant-show-div">
                    <section className="nav-border">
                        <nav className="restaurant-nav">
                            <ol className="restaurant-toolbar">
                                <li className="quick-nav-li">
                                    <button  className="quick-nav-button">Overview</button>
                                </li>
                                <li className ="quick-nav-li">
                                    <button  className="quick-nav-button">Photos</button>
                                </li>
                                <li className="quick-nav-li">
                                    <button className="quick-nav-button">Menu</button>
                                </li>
                                <li className="quick-nav-li">
                                    <button className="quick-nav-button">Reviews</button>
                                </li>
                            </ol>
                        </nav>
                    </section>
                    <section>
                        <h1  className="restaurant-name">{rest.name}</h1>
                        <div className="basic-rest-info">
                            <div className='icon-info'>Overall Review Score</div>
                            <div className='icon-info'><FaMoneyBill /> {rest.pricing}</div>
                            <div className='icon-info'><MdRestaurant /> {rest.cuisines} </div>
                        </div>
                        <div className="restaurant-description-div">
                            <span className="restaurant-description-span">{rest.description}</span>
                        </div>
                    </section>
                    <h2  className="restaurant-photos-header">Photos</h2>
                        <text>Setup AWS for restaurant and food photos</text>
                    <h2 className="restaurant-menu-header">Menu</h2>
                        <text>Render pdf of restaurant menu</text>
                    <div>
                        <h2 className="restaurant-menu-header">Reviews</h2>
                        <text>Restaurant's Review Component goes here</text>
                    </div>
                </div>
                <section className="additional-info-section">
                    <h4 className="additional-info-header">Additional Information</h4>
                        <section className="additional-info-div">
                            <ul className="additional-info-ul">
                                <li>Address
                                    <p className="additional-info-li"><MdOutlineLocationOn /> {rest.address}</p>
                                </li>
                                <li>Phone Number
                                    <p className="additional-info-li"><FaPhoneAlt /> {rest.phone_number}</p>
                                </li>
                                <li>Neighborhood
                                    <p className="additional-info-li"><MdHomeWork /> {rest.neighborhood}</p>
                                </li>
                                <li>Business Hours
                                    <p className="additional-info-li"><MdAccessTime /> {rest.business_hours}</p>
                                </li>
                                <li>Cuisines
                                    <p className="additional-info-li"><MdRestaurant /> {rest.cuisines}</p>
                                </li>
                                <li>Dining Style
                                    <p className="additional-info-li"><FaConciergeBell /> {rest.dining_style}</p>
                                </li>
                                <li>Dress Code
                                    <p className="additional-info-li"><GiLargeDress /> {rest.dress_code}</p>
                                </li>
                                <li>Extra Information
                                    <p className="additional-info-li"><FaTags /> {rest.extra_info}</p>
                                </li>
                            </ul>
                        </section>
                </section>
            </div>
        )
    }
}

export default RestaurantShow;