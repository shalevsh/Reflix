import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Catalog from "./components/NavBar.js";
import Item from "./components/Item.js";
import NavBar from "./components/NavBar.js";
import movies from "./data/mockData.js";
import users from "./data/mockData.js";

class App extends Component {
    constructor() {
        super();
        this.state = {
            movies,
            user: null,
            users,
        };
    }

    changeUser = (user) => this.setState({ user });
    updateRentStatus = (movieId) => {
        const movies = [...this.state.movies];
        const movie = movies.find((movie) => movie.id === movieId);
        movie.isRented = !movie.isRented;
        this.setState({ movies });
    };

    render() {
        const state = this.state;
        return (
            <Router>
                <div>
                    <NavBar user={state.user} />
                    <Route
                        path="/"
                        exact
                        render={() => (
                            <Home
                                users={state.users}
                                setUser={this.changeUser}
                            />
                        )}
                    />
                    <Route
                        path="/catalog"
                        exact
                        render={() => (
                            <Catalog
                                movies={state.movies}
                                toggleRentStatus={this.updateRentStatus}
                            />
                        )}
                    />

                    <Route
                        exact
                        path="/movies/:id"
                        render={({ match }) => (
                            <Item movie={state.movies[match.params.id]} />
                        )}
                    />
                </div>
            </Router>
        );
    }
}
export default App;
