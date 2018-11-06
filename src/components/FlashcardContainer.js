import React, { Component } from "react";
import Flashcard from "./Flashcard";
import { CLIENT_URL } from "../constants.js";
import axios from 'axios';


class FlashcardContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flashcards: [],
			currentIndex: 0
		}
		this.handleKeyUp = this.handleKeyUp.bind(this)
		this.next = this.next.bind(this)
		this.prev = this.prev.bind(this)
	}

	next() {
		let nextIndex = (this.state.currentIndex + 1) === this.state.flashcards.length 
			? this.state.currentIndex 
			: this.state.currentIndex + 1;

		this.setState({ currentIndex: nextIndex })
	}

	prev() {
		let prevIndex = this.state.currentIndex - 1 < 0
			? 0
			: this.state.currentIndex - 1;

		this.setState({ currentIndex: prevIndex });
	}

	handleKeyUp(event) {
		if (event.keyCode === 39) this.next();
		if (event.keyCode === 37) this.prev();
	}

	componentDidMount() {
		window.addEventListener('keyup', this.handleKeyUp)
		axios.get(CLIENT_URL)
			.then(res => this.setState({ flashcards: res.data }))
			.catch(err => console.log(err));
	}

  render() {
  	let flashcard = this.state.flashcards
  	[this.state.currentIndex]
    return (
    	<div>
    		{ flashcard && (
    			<Flashcard card={ flashcard } next={ this.next } />
    		) }
    	</div>
    );
  }
}

export default FlashcardContainer;
