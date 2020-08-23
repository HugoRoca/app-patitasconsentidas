import React, { Component } from "react";
import logo from "../logo.png";

export default class Nav extends Component {
  render() {
    return (
      <div className="mobile-nav">
        <div className="patitas-consentidas-navbar-brand">
          <a href="">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="patitas-consentidas-navbar-toggler">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}
