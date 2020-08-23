import React, { Component } from 'react'
import Nav from './Nav'
import Header from './Header'

export default class Container extends Component {
  render() {
    return (
      <div className="main-content-wrapper d-flex clearfix">
        <Nav/>
        <Header />
      </div>
    )
  }
}
