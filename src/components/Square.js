import React, { Component } from 'react'
import '../App.css'

class Square extends Component{
  

  winOrLose = () => {
     if (this.props.value === "treasure") {
        alert("You win!")
      } else if (this.props.value === "bomb") {
        alert("You lose!")
      }
  }

  render(){
    return(
      <>
        <div
          className = "square"
          onClick = { this.props.handleOnClick }
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
