import React, { Component } from "react";
import "./index.scss";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }

  decrease() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  increase() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

reset = () => {
  {
    this.setState({
      counter: 0,
    });
}
}

  render() {
    return (
      <div class="counter">
        <button class="counter__button" onClick={this.increase}>
          -
        </button>
        <span class="counter__value" onClick={()=>this.reset()}>{this.state.counter}</span>
        <button class="counter__button" onClick={this.decrease}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
