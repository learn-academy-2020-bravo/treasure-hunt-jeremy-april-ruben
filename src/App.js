import React, { Component } from 'react'
import Square from './components/Square'
import Counter from './components/Counter'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      newGame: true,
      counter: 8,
      clicked: false
    }
  }

  componentDidMount() {
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

  reset = () => {
      this.setState( {squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      newGame: true,
      counter: 8}
      )
      this.componentDidMount()
  }

  clickCounter = () => {
    let { counter } = this.state
    counter -= 1
    this.setState({ counter: counter })
    if (counter === 0) {
        alert("you lose")
    }
  }

  handleOnClick = (value) => {
    this.setState({
      newGame: false,
      clicked: true
    })
    if (value === "treasure") {
      alert("You win!")
    } else if (value === "bomb") {
      alert("You lose!")
    }
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
          clicked = { this.state.clicked }
          handleOnClick = { this.handleOnClick }
        />
      )
    })

    return(
      <>
        <h1>Treasure Hunt</h1>
        <div
          id="grid"
          onClick = {this.clickCounter}
        >
          { square }
        </div>
        <button onClick= {this.reset} id="reset">Start / Reset</button>
        <Counter
            counter = {this.state.counter}
        />
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
