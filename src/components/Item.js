import React, { Component } from "react";
import "../styles/item.css";
import { Link } from "react-router-dom";

class Item extends Component {
    toggleRentStatus = () => {
        const movieId = this.props.movie.id;
        this.props.toggleRentStatus(movieId);
    };

    render() {
        const movie = this.props.movie;
        return (
            <div className="item-container">
                <div className="item-header">
                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </div>
                <div className="item-body">
                    <button onClick={this.toggleRentStatus}>{"+"}</button>
                </div>
            </div>
        );
    }
}

export default Item;
