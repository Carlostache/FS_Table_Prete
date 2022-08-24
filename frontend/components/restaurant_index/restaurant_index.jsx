import React from "react";

import { fetchRestaurants } from  "../../actions/restaurant_actions";


class RestaurantIndex extends React.Component {

    componentDidMount(){
        this.props.fetchRestaurants()
    };

    render() {

        const { rests } = this.props

        return (
            <div>
                <header className="rest-index-header">
                    <h2 className="index-header-text">Popular Ramen Spots</h2>
                </header>
                <div className="rest-row-div">
                    <ul className="rest-row-ul">
                        <li className="rest-row-li">
                            <a href="#/restaurants/1">
                                <div className="rest-link-div">
                                    <img className="rest-index-image" src='' />
                                    <h3 className="rest-name-header">{rests.name}</h3>
                                    <div className="rest-index-reviews">4.7 Stars</div>
                                    <div className="rest-index-details">{rests.cuisine} ● {rests.dollars} ● {rests.neighborhood}</div>
                                    <div className="rest-reservation-div">
                                        <button className="rest-reservation-button">Book a Table!</button>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default RestaurantIndex;