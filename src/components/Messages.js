import React, { Component } from 'react'
import '../App.css'

class Messages extends Component {
  render() {
    return (
        <>
          <div id="messages">
            {this.props.win && <h3>You win!</h3>}
            {this.props.dead && <h3>You died!</h3>}
            {this.props.lose && <h3>Too many tries, you lose!</h3>}
          </div>
        </>
    )
  }
}

export default Messages
