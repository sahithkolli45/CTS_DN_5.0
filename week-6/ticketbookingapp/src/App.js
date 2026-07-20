import React, { Component } from "react";
import "./App.css";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    });
  };

  render() {
    let page;
    let button;

    if (this.state.isLoggedIn) {
      page = <UserPage />;

      button = (
        <button
          className="login-button"
          onClick={this.handleLogout}
        >
          Logout
        </button>
      );
    } else {
      page = <GuestPage />;

      button = (
        <button
          className="login-button"
          onClick={this.handleLogin}
        >
          Login
        </button>
      );
    }

    return (
      <div className="App">
        {button}
        {page}
      </div>
    );
  }
}

export default App;