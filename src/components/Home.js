import React, { Component } from "react";
import "../styles/home.css";
import User from "./User";

class Home extends Component {
    changeUser = (user) => this.props.setUser(user);

    render() {
        const users = this.props.users;
        const usersComponents = users.map((user) => (
            <User changeUser={this.changeUser} user={user} key={user.id} />
        ));

        return (
            <div className="profiles-container" onClick={this.changeUser}>
                {usersComponents}
            </div>
        );
    }
}
export default Home;
