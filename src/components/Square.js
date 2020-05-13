import React, { Component } from 'react'
import '../App.css'

class Square extends Component{
  constructor(props){
    super(props)
      this.state = {
        squares: this.props.squares
      }
  }

  handleOnClick = () => {
    this.props.handleSquareChange(this.state.squares)
    const { squares } = this.state
    squares[this.props.index] = "tree"
    this.setState({
      squares: squares
    })
  }

  render(){
    return(
      <>
        <div
          className = "square"
          onClick = { this.handleOnClick }
          >
          { this.props.value }
        </div>
      </>
    )
  }
}
export default Square
