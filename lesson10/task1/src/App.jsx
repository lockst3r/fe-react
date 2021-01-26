import React, { Component } from "react";
import UserMenu from "./UserMenu.jsx";
import UserProfile from "./UserProfile.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null,
    };
  }
  componentDidMount() {
    this.fetchUserData(this.props.userId);
  }

  fetchUserData = (userId) => {
    const userUrl = `https://api.github.com/users/${userId}`;
    fetch(userUrl)
      .then((response) => response.json())
      .then((userData) =>
        this.setState({
          userData,
        })
      );
  };

  render() {
    return (
      <div class="page">
        <header class="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
