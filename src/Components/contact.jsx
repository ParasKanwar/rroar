import React from "react";
import Navbar from "./Navbar/Navbar";

export default class Component extends React.Component {
  render() {
    return (
      <Navbar
        pathname={this.props.history.location.pathname}
        history={this.props.history}
      ></Navbar>
    );
  }
}
