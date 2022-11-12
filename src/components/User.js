import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/user.css";

class User extends Component {
    changeUser = () => {
        this.props.changeUser(this.props.user);
    };

    render() {
        const user = this.props.user;
        return (
            <div className="profile-container" onClick={this.changeUser}>
                <p>{user.name}</p>
                <Link to={"/catalog"}>
                    <img
                        className="profile-avatar"
                        src={user.avatar}
                        alt={user.name}
                    />
                </Link>
            </div>
        );
    }
}

export default User;
