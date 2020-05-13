import React, { Component } from 'react'
import '../App.css'

class Square extends Component{
  handleOnClickToApp = () => {
    this.props.handleOnClick(this.props.value)
  }

  render(){
    return(
      <>
        <div
          className = "square"
          onClick = { this.handleOnClickToApp }
          >
          {
            this.props.value
          }
        </div>
      </>
    )
  }
}
export default Square
