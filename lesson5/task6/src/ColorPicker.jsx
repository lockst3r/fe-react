import React, { Component } from 'react';

const CORAL = 'Coral';
const AQUA = 'Aqua';
const BISQUE = 'Bisque';

class ColorPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

getColor = (color) => {
    this.setState({
      text: color,
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title">
          {this.state.text}
        </div>
        <div>
          <button 
            className="picker__button picker__button_coral"
            onMouseOver={() => this.getColor(CORAL)}
            onMouseOut={() => this.getColor()}
          ></button>
          <button 
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.getColor(AQUA)}
            onMouseOut={() => this.getColor()}
          ></button>
          <button 
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.getColor(BISQUE)}
            onMouseOut={() => this.getColor()}
          ></button>
        </div>
      </div>
    )
  }
}

export default ColorPicker;
