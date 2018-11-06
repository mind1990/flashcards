import React, { Component } from 'react'
import Definition from './Definition'
// import FlashcardContainer from './FlashcardContainer'

class Flashcard extends Component {
  render() {
  	let flashcard = this.props.card
    return (
      <div className="card">
      	<h1>{ flashcard.word }</h1>
      </div>
    )
  }
}

export default Flashcard