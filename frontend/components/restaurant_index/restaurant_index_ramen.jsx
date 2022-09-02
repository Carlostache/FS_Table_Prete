import React from "react";

import { Link } from "react-router-dom";


const RamenComponent = ({ rest })  => {



    return (
            <li className="rest-row-li">
                <Link to={`restaurants/${rest.id}`} >
                    <div className="rest-link-div">
                        <img className="rest-index-image" src={window.rest_banner_1} />
                        <h3 className="rest-name-header">{rest.name}</h3>
                        <div className="rest-index-reviews">4.7 Stars</div>
                        <div className="rest-index-details">{rest.cuisine} ● {rest.dollars} ● {rest.neighborhood}</div>
                        <div className="rest-reservation-div">
                            <button className="rest-reservation-button">Book a Table!</button>
                        </div>
                    </div>
                </Link>
            </li>
    )
}

export default RamenComponent;