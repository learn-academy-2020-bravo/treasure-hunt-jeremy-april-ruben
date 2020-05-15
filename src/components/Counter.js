import React, { Component } from 'react'
import '../App.css'

class Counter extends Component {
  render() {
      return (
        <>
            <p> Ammo left: <strong> {this.props.counter} </strong> </p>
        </>
      )
  }
}

export default Counter
