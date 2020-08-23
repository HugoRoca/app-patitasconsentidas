import React, { Component } from 'react'
import logo from '../logo.png'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer_area clearfix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-4">
              <div className="single_widget_area">
                <div className="footer-logo mr-50">
                  <a href="">
                    <img src={logo} alt=""/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
