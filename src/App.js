import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      newGame: true
    }
  }

  reset = () => {
    const { squares } = this.state
    let randomTreasure = Math.floor(Math.random() * this.state.squares.length)
    let randomBomb = Math.floor(Math.random() * this.state.squares.length)
    while (randomTreasure === randomBomb) {
      randomTreasure = Math.floor(Math.random() * this.state.squares.length)
      randomBomb = Math.floor(Math.random() * this.state.squares.length)
    }
    squares[randomTreasure] = "treasure"
    squares[randomBomb] = "bomb"
    this.setState({
      squares: squares,
      newGame: true
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
          newGame = { this.state.newGame }
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
        <button onClick= {this.reset} id="reset">Start / Reset</button>
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
