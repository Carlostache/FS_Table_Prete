import React from "react";

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
                        <h1 href="/" className="restaurant-name">{rest.name}</h1>
                        <div className="basic-rest-info">
                            <div>Overall Review Score</div>
                            <div>Number of Reviews</div>
                            <div>Dollar Icon: {rest.pricing}</div>
                            <div>Fork-Knife Icon: {rest.cuisines} </div>
                        </div>
                        <div className="restaurant-description-div">
                            <span className="restaurant-description-span">{rest.description}</span>
                        </div>
                    </section>
                    <h2 className="restaurant-photos-header">Photos</h2>
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
                        <div className="additional-info-div">
                            <ul className="additional-info-ul">
                                <li>
                                    Address 
                                    <p>{rest.address}</p>
                                </li>
                            </ul>
                        </div>
                </section>
            </div>
        )
    }
}

export default RestaurantShow;