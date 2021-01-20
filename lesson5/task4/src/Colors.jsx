import React, { Component } from "react";
import "./index.scss";

const RED = "#f00";
const GREEN = "#0f0";
const BLUE = "#00f";

class Counter extends Component {
  setBodyColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className="colors">
        <button
          style={{
            backgroundColor: RED,
          }}
          className="colors"
          onClick={this.setBodyColor.bind(this, RED)}
        ></button>
        <button
          style={{
            backgroundColor: GREEN,
          }}
          className="colors"
          onClick={this.setBodyColor.bind(this, GREEN)}
        ></button>
        <button
          style={{
            backgroundColor: BLUE,
          }}
          className="colors"
          onClick={this.setBodyColor.bind(this, BLUE)}
        ></button>
      </div>
    );
  }
}

export default Counter;
