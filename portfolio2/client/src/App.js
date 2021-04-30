import React from "react";

import PutUserRequest from "./components/PutUserRequest";
import GetUserRequest from "./components/GetUserRequest";
import PatchUserRequest from "./components/PatchUserRequest";
import DeleteUserRequest from "./components/DeleteUserRequest";

import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1>Travel Wishlist App.</h1>
          <h3>Portfolio 2 - Jessica Gray</h3>
        </div>
        <div className="container">
          <div>
            <PutUserRequest />
            <GetUserRequest />
          </div>
          <div>
            <PatchUserRequest />
            <DeleteUserRequest />
          </div>
        </div>
      </div>
    );
  }
}
