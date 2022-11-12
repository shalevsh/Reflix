import React, { Component } from "react";
import "../styles/catalog.css";
import * as constants from "../constants/consts.js";
import Item from "./Item";
import SearchBar from "./SearchBar";

class Catalog extends Component {
    constructor() {
        super();
        this.state = {
            searchText: "",
        };
    }
    toggleRentStatus = (movieId) => this.props.toggleRentStatus(movieId);
    filterSearchBar = (text) =>
        this.setState({ searchText: text.toLowerCase() });

    render() {
        const moviesComponants = this.props.movies.map((movie) => (
            <Item
                key={movie.id}
                movie={movie}
                toggleRentStatus={this.toggleRentStatus}
            />
        ));
        const state = this.state;
        return (
            <div className="catalog-container">
                <h1>{constants.CATALOG}</h1>
                <SearchBar
                    text={state.searchText}
                    setText={this.filterSearchBar}
                />
                {moviesComponants}
            </div>
        );
    }
}

export default Catalog;
