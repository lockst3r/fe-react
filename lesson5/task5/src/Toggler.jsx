import React, { Component } from "react";

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Off",
    };

    this.changeToggle = this.changeToggle.bind(this);
  }

  changeToggle() {
    this.state.text === "Off"
      ? this.setState({
          text: "On",
        })
      : this.setState({
          text: "Off",
        });
  }

  render() {
    return (
      <button className="toggler" onClick={this.changeToggle}>
        {this.state.text}
      </button>
    );
  }
}

export default Toggler;
