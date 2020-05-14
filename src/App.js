import React, { Component } from 'react'
import Square from './components/Square'
import Counter from './components/Counter'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      // Empty because values are added through methods
      squares: [],
      // Instead of there being ONE clicked boolean value, this will be an array of falses with the same length of squares
      clicked: [],
      newGame: true,
      counter: 10,
    }
  }

  // a method that sets the bomb and treasure chest to a random location in the array
  componentDidMount() {
    // Likely another way without For loop, but using For loop to produce a large array with the same value repeated, instead of pasting the value over and over again
    let squares = []
    let clicked = []
    for (let i=0; i<25; i++) squares.push("?")
    for (let i=0; i<25; i++) clicked.push(false)
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
      squares: squares
    })
  }
// a function that resets the state when clicked on and calls the componentDidMount method
  reset = () => {
    let squares = []
    let clicked = []
    for (let i=0; i<25; i++) squares.push("?")
    for (let i=0; i<25; i++) clicked.push(false)
    // resets square and clicked back to their original array
    this.setState({
      squares: squares,
      newGame: true,
      counter: 10,
      bombCounter: 0,
      clicked: clicked
    })
    this.componentDidMount()
  }
// counts how many clicks are left until the user loses
// a conditional method the triggers an alert if the user wins or loses by finding treasure or a bomb
// the value is passed in as an argument from Square.js
  handleOnClick = (value, index) => {
    const { clicked } = this.state
    let { counter } = this.state
    clicked[index] = true
    this.setState({
      newGame: false,
      clicked: clicked,
      // Moved the counter to handleOnClick
      counter: counter - 1,
    })
    if (value === "treasure") {
      // Alert delays by 200 milliseconds
      setTimeout(function() {
        alert("You win!")
      }, 200)
    } else if (value === "bomb") {
      setTimeout(function() {
        alert("You lose!")
      }, 200)
    } else if (counter === 1) {
      setTimeout(function() {
        alert("You lose!")
      }, 200)
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
        <div id="grid">
          { square }
        </div>
        <button onClick= {this.reset} id="reset">Reset</button>
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
