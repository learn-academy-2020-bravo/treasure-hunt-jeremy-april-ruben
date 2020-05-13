import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    }
  }

  handleSquareChange = squareValue => {
    this.setState({
      squares: squareValue
    })
  }

  render(){
    let square = this.state.squares.map((value, index) => {
      return(
        <Square
          value = { value }
          index = { index }
          squares = { this.state.squares}
          handleSquareChange = { this.handleSquareChange }
        />
      )
    })

    return(
      <>
        <h1>Treasure Hunt</h1>
        <div
          id="grid"
        >
          { square }
        </div>
      </>
    )
  }
}
export default App

// Create a component that will represent each square, with "?" inside
// Each onClick of component should give alert with ID of position in the grid
// Then each onClick of component should switch "?" to the word "tree"
// Assign on component's onClick to switch "?" to treasure box and an alert with text "You Win"
// Create method that decrements the guesses user has left
// Create method or render conditional where a message says "Win" or "Lose"
// Create a button with onClick that restarts the game
// Have onClick of one component display a bomb icon and mesesage "You Lose"
// Create conditional where user has 25 turns and an allotment of selecting three bombs




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
    // make an array holding trees and bombs and treasure
    // have a math.random pick a random one 
    // set it to the squares [this.props.index]
    let newArry = ["tree", "tree", "tree","tree","tree", "tree", "treasure", "bomb"]
    let randomArry = Math.floor(Math.random() * 8)
    squares[this.props.index] = newArry[randomArry]
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
