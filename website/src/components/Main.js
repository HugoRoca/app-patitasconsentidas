import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <nav className="patitas-consentidas-nav">
        <ul>
          <li className="active"><a href="">Inicio</a></li>
          <li><a href="">Ropas</a></li>
          <li><a href="">Camas</a></li>
          <li><a href="">Accesorios</a></li>
          <li><a href="">Aseo</a></li>
        </ul>
      </nav>
    )
  }
}
