import React, { Component } from 'react'
import '../App.css'

class Square extends Component{
    // sends the value prop to the method handleOnClick in App.js
  handleOnClickToApp = () => {
    // Pass both the value and index of the array item back to the App component
    this.props.handleOnClick(this.props.value, this.props.index)
  }

  render(){
    // Create conditional rendering where if the value newGame is true, then don't display the value (i.e. null)
    let display
    if (this.props.newGame) {
      display = null
    } // if the value in the clicked array on the index the same as squares is equal to true, then display the value
    else if (this.props.clicked[this.props.index]) {
      display = this.props.value
    }
    return(
      <>
        <div
          className = "square"
          onClick = { this.handleOnClickToApp }
          >

          {
            // this.props.value
            display
          }
        </div>
      </>
    )
  }
}
export default Square
