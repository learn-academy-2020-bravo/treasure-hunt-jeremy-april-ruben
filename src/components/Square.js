import React, { Component } from 'react'
import '../App.css'

class Square extends Component{
  constructor(props){
    super(props)
      this.state = {
        squares: this.props.squares
      }
  }

  handleChange = e => {
    const { squares } = this.state
    squares[this.props.index] =
    this.setState({
      squares: squares
    })
  }

  positionAlert = () => {
    alert( this.props.index )
  }

  render(){
    return(
      <>
        <div
          className = "square"
          onClick = { this.handleChange }
          >
          { this.props.value }
        </div>
      </>
    )
  }
}
export default Square
