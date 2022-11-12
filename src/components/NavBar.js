import React, { Component } from "react";
import {Link} from "react-router-dom";

import "../styles/navbar.css";
import * as constants from "../constants/consts.js";


class Catalog extends Component {
    
    handleCatalogClick = (event) =>
        this.props.user === null
            ? event.preventDefault()
            : alert(constants.NO_USER_SELECT_MSG);
    
    render() {
        return (
            <div class="navbar-container">
                 <Link to="/">Home</Link>
                 <Link to="/catalog" onClick={this.handleCatalogClick}>{constants.CATALOG}</Link>
            </div>
        );
    }
}

export default Catalog;
