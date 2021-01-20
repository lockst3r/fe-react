import React, { Component } from 'react';

const CORAL = 'coral';
const AQUA = 'aqua';
const BISQUE = 'bisque';

class Colors extends Component {
  setBodyColor = color => {
    document.body.style.backgroundColor = color;
  }

  render() {
    return (
      <div className="colors">
        <button 
          style={{backgroundColor: RED}} 
          className="colors__button" 
          onClick={() => this.setBodyColor(RED)} 
        />
        <button 
          style={{backgroundColor: GREEN}} 
          className="colors__button"
          onClick={() => this.setBodyColor(GREEN)}  
        />
        <button 
          style={{backgroundColor: BLUE}} 
          className="colors__button"
          onClick={() => this.setBodyColor(BLUE)}  
        />
      </div>
    );
  }
}

export default Colors;