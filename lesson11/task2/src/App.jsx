import React, { Component } from 'react';
import Dialog from './Dialog';

class App extends Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    const text = <p>Use immutable array methods to work with data. It will help to avoid bugs</p>;
    return (
      <div class="app">
        <button class="btn" onClick={this.showDialog}>
          Show dialog
        </button>
        <Dialog isOpen={this.state.isOpen} title="Recommendation" onClose={this.hideDialog}>
          {text}
        </Dialog>
      </div>
    );
  }
}

export default App;
