import React, { Component } from 'react'
import '../App.css'

class Messages extends Component {
  render() {
    return (
        <>
          <div id="messages">
            {this.props.win && <h3>Winner, winner, duck dinner!</h3>}
            {this.props.dead && <h3>You almost shot your dog!</h3>}
            {this.props.lose && <h3>Ran out of ammo, try again!</h3>}
          </div>
        </>
    )
  }
}

export default Messages
