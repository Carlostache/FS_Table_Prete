import React from "react";

import { fetchRestaurants } from  "../../actions/restaurant_actions";

import RamenComponent from "./restaurant_index_ramen";


class RestaurantIndex extends React.Component {

    componentDidMount(){
        this.props.fetchRestaurants()
    };

    render() {

        let { rests } = this.props



        return (
            <div>
                <header className="rest-index-header">
                    <h2 className="index-header-text">Popular Ramen Spots</h2>
                </header>
                <div className="rest-row-div">
                    <ul className="rest-row-ul">
                        {rests.map(rest => <RamenComponent rest={rest} key={rest.id} /> )}
                    </ul>
                </div>
            </div>
        )
    }

}

export default RestaurantIndex;