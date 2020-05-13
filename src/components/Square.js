import React, { Component } from 'react'
import '../App.css'

class Square extends Component{
  constructor(props){
    super(props)
      this.state = {
        squares: this.props.squares,
        newGame: this.props.newGame,
        clicked: false
      }
  }

  handleOnClick = () => {
    this.setState({
      newGame: false,
      clicked: true
    })
  }

  render(){
    return(
      <>
        <div
          className = "square"
          onClick = { this.handleOnClick }
          >
          {this.state.clicked &&
            this.props.value
          }
        </div>
      </>
    )
  }
}
export default Square
