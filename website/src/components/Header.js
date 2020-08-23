import React, { Component } from "react";
import Main from './Main'
import logo from '../logo.png'

export default class Header extends Component {
  render() {
    return (
      <header className="header-area clearfix">
        <div className="nav-close">
          <i className="fa fa-close" aria-hidden="true"></i>
        </div>
        <div className="logo">
          <a href="">
            <img src={logo} alt=""/>
          </a>
        </div>
        <Main />
        <div className="social-info d-flex justify-content-between p-2">
          <a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>
          <a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a>
        </div>
      </header>
    );
  }
}
