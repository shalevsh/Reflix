import React, { Component } from "react";
import "../styles/item.css";

class Item extends Component {
    render() {
        return (
            <div id="creature-container">
                <h1></h1>
                <img src={""} alt="" />
                <div className="title">Power:</div>
                <div className="power text"> {"fentity.power"}</div>
                <div className="other text">{"fentity.other"}</div>
            </div>
        );
    }
}

export default Item;
