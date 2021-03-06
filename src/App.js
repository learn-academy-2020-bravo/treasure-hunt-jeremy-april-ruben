import React, { Component } from 'react'
import Square from './components/Square'
import Counter from './components/Counter'
import Messages from './components/Messages'
import Header from './components/Header'
import Gun from './components/Gun'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      // Empty because values are added through methods
      squares: [],
      // Clicked is an array of falses with the same length of squares. The index value will equal true when the square has been clicked on
      usedIndexes: [],
      // newGame will equal false as soon as the user clicks their first square
      newGame: true,
      // Done will equal true if user has lost or won
      done: false,
      counter: 15,
      win: false,
      dead: false,
      lose: false
    }
  }

  playAudioShoot() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  playAudioStart() {
    const audioEl = document.getElementsByClassName("audio-element2")[0]
    audioEl.play()
  }

  playAudioDog() {
    const audioEl = document.getElementsByClassName("audio-element3")[0]
    audioEl.play()
  }

  playAudioDuck() {
    const audioEl = document.getElementsByClassName("audio-element4")[0]
    audioEl.play()
  }

  // a method that sets the bomb and treasure chest to a random location in the array
  componentDidMount() {
    // Likely another way without For loop, but using For loop to produce a large array with the same value repeated, instead of passing the value over and over again
    let squares = []
    for (let i=0; i<25; i++) squares.push("❌") 
    let randomTreasure = Math.floor(Math.random() * squares.length)
    let randomBomb1 = Math.floor(Math.random() * squares.length)
    // let randomBomb2 = Math.floor(Math.random() * squares.length)
    // let randomBomb3 = Math.floor(Math.random() * squares.length)
    // this while loop makes sure that the treasure and bomb aren't assigned to the same index
    while (randomTreasure === randomBomb1) {
      randomTreasure = Math.floor(Math.random() * squares.length)
      randomBomb1 = Math.floor(Math.random() * squares.length)
    }
    squares[randomTreasure] = "🦆"
    squares[randomBomb1] = "🐕"
    // squares[randomBomb2] = "bomb"
    // squares[randomBomb3] = "bomb"
    this.setState({
      squares: squares
    })
  }
// a function that resets the state when clicked on and calls the componentDidMount method
  reset = () => {
    let squares = []
    for (let i=0; i<25; i++) squares.push("❌")
    // resets square and clicked back to their original array
    this.setState({
      squares: squares,
      newGame: true,
      done: false,
      counter: 15,
      bombCounter: 0,
      usedIndexes: [],
      win: false,
      dead: false,
      lose: false
    })
    this.componentDidMount()
    this.playAudioStart()
  }
// counts how many clicks are left until the user loses
// a conditional method the triggers an alert if the user wins or loses by finding treasure or a bomb
// the value is passed in as an argument from Square.js
  handleOnClick = (value, index) => {
    const { usedIndexes } = this.state
    let { counter } = this.state
    // let { bombCounter } = this.state
    // if the initial clicked value is false, then decrement the counter
    // if (!clicked[index] && value === "bomb") bombCounter++
    if (!usedIndexes.includes(index) && !this.state.done) counter--
    // change the boolean value of clicked at the index of the value to true
    if (!this.state.done) usedIndexes.push(index)
    this.setState({
      newGame: false,
      usedIndexes: usedIndexes,
      // Moved the counter to handleOnClick
      counter: counter
    })
    this.alerts(value)
    this.playAudioShoot()
  }

  alerts = (value) => {
    let { done } = this.state
    let { win } = this.state
    let { dead } = this.state
    let { lose } = this.state
    let { counter } = this.state
    if (value === "🦆" && done !== true) {
      this.playAudioDuck() 
      // Alert delays by 200 milliseconds
      // setTimeout(() => alert("YOU WIN!"), 200)
      win = true
      // Convert 'done' to true since the game is over
      done = true
    } else if (value === "🐕" && done !== true) {
      this.playAudioDog()
      // setTimeout(() => alert("YOU'RE DEAD!"), 200)
      dead = true
      done = true
    } else if (counter === 1) {
      // setTimeout(() => alert("Too many tries, you lose!"), 200)
      lose = true
      done = true
    }
    this.setState({ done: done, win: win, dead: dead, lose: lose})
  }

  render(){
      // iterates through the squares array in the state object and displays it on the page in square.js
    let square = this.state.squares.map((value, index) => {
      return(
        <Square
          value = { value }
          index = { index }
          squares = { this.state.squares}
          newGame = { this.state.newGame }
          handleOnClick = { this.handleOnClick }
          done = { this.state.done }
          key = { index }
          usedIndexes = { this.state.usedIndexes }
        />
      )
    })

    return(
      <>
        <div className = "body">
          <Header />
          <audio className="audio-element">
            <source src="http://soundbible.com/mp3/Winchester12-RA_The_Sun_God-1722751268.mp3"></source>
          </audio>
          <audio className="audio-element2">
            <source src="https://fi.zophar.net/soundfiles/nintendo-nes-nsf/duck-hunt/8%20-%20Game%20Over.mp3"></source>
          </audio>
          <audio className="audio-element3">
            <source src="https://fi.zophar.net/soundfiles/nintendo-nes-nsf/duck-hunt/16%20-%20SFX%20Dog%20Laughs.mp3"></source>
          </audio>
          <audio className="audio-element4">
            <source src="https://fi.zophar.net/soundfiles/nintendo-nes-nsf/duck-hunt/13%20-%20SFX%20Duck%20Quack.mp3"></source>
          </audio>
          <Messages
            win = { this.state.win }
            dead = { this.state.dead }
            lose = { this.state.lose }
          />
          <div id="grid">
            { square }
          </div>

          <Counter
              counter = {this.state.counter}
          />
          <button className="button" onClick= {this.reset} id="reset">RESET</button>
        </div>
      </>
    )
  }
}
export default App
