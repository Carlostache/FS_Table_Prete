import React from "react";

import { fetchRestaurant } from "../../actions/restaurant_actions";


class RestaurantShow extends React.Component{

    componentDidMount(){
        debugger
        this.props.fetchRestaurant(this.props.match.params.restaurantId)
            .then(() => this.setState())
    }

    render() {
        
        let { rest } = this.props;

        debugger
        if (!rest) {
            return null;
        }

        return (
            <div className="restaurant-show-div">
                <section className="nav-border">
                    <nav className="restaurant-nav">
                        <ol>
                            <li>
                                <button>Overview</button>
                            </li>
                            <li>
                                <button>Photos</button>
                            </li>
                            <li>
                                <button>Menu</button>
                            </li>
                            <li>
                                <button>Reviews</button>
                            </li>
                        </ol>
                    </nav>
                </section>
                <section>
                    <h1 className="restaurant-name">{rest.name}</h1>
                    <div className="basic-rest-info">
                        <div>Overall Review Score</div>
                        <div>Number of Reviews</div>
                        <div>Dollar Icon {rest.pricing}</div>
                        <div>Fork-Knife Icon {rest.cuisines} </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default RestaurantShow;