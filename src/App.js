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
      counter: 10,
      clicked: false
    }
  }

  // a method that sets the bomb and treasure chest to a random location in the array
  componentDidMount() {
    const { squares } = this.state
    let randomTreasure = Math.floor(Math.random() * squares.length)
    let randomBomb = Math.floor(Math.random() * squares.length)
    // this while loop makes sure that the treasure and bomb aren't assigned to the same index
    while (randomTreasure === randomBomb) {
      randomTreasure = Math.floor(Math.random() * squares.length)
      randomBomb = Math.floor(Math.random() * squares.length)
    }
    squares[randomTreasure] = "treasure"
    squares[randomBomb] = "bomb"
    this.setState({
      squares: squares,
      newGame: true
    })
  }
// a function that resets the state when clicked on and calls the componentDidMount method
  reset = () => {
      this.componentDidMount()
      this.setState( {squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      newGame: true,
      counter: 10
    })
    
  }
// counts how many clicks are left until the user loses
  clickCounter = () => {
    let { counter } = this.state
    counter -= 1
    this.setState({ counter: counter })
    if (counter === 0) {
        alert("you lose")
    }
  }
// a conditional method the triggers an alert if the user wins or loses by finding treasure or a bomb
// the value is passed in as an argument from Square.js 
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
      // iterates through the squares array in the state object and displays it on the page in square.js
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
