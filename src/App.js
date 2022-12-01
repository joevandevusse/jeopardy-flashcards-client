import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import ClueButton from './components/ClueButton';
import CorrectButton from './components/CorrectButton';
import IncorrectButton from './components/IncorrectButton';

class App extends Component {
  constructor(props) {
    super(props);

    this.updateCard = this.updateCard.bind(this)

    this.state = {
      cards: [
        {id: 1, clue: "Capital of Illinois", answer: "Springfield"},
        {id: 2, clue: "Capital of Wisconsin", answer: "Madison"},
        {id: 3, clue: "Capital of Indiana", answer: "Indianapolis"}
      ],
      currentCard: {id: 1, clue: "Capital of Illinois", answer: "Springfield"},
      currentCardIndex: 0
    }
  }

  componentDidMount() {
    fetch("http://localhost:9000/clues")
    .then(response => {
      return response.json();
    }).then(json => {
      this.setState({
        cards: json,
        currentCard: json[0],
        currentCardIndex: 0
      })
    })
  }

  getRandomCard(currentCards) {
    var card = currentCards[Math.floor(Math.random() * currentCards.length)]
    console.log(card);
    card.clue = card.clue.replaceAll("\"\"", "\"");
    card.answer = card.answer.replaceAll("\"\"", "\"");
    card.category = card.category.replaceAll("\"\"", "\"");
    card.clue = card.clue.replaceAll("</", "");
    card.answer = card.answer.replaceAll("</", "");
    card.clue = card.clue.replaceAll("i>", "");
    card.answer = card.answer.replaceAll("i>", "");
    console.log(card);
    //this.callRoute();
    return card;
  }

  incrementCorrect() {
    console.log("Way to go!");
    let updateId = this.state.currentCard.id;
    fetch("http://localhost:9000/clues/correct", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ updateId }),
    }).then(response => {
      return response.text();
    })
  }

  updateCard() {
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  incrementIncorrect() {
    console.log("Time to study!");
  }

  render() {
    return (
      <div className="App">
        <div className="cardRow">
          <Card 
            value={this.state.currentCard.value}
            category={this.state.currentCard.category}
            clue={this.state.currentCard.clue} 
            answer={this.state.currentCard.answer}
          />
        </div>
        <div className="buttonRow">
          <CorrectButton incrementCorrect={this.incrementCorrect}/>
          <ClueButton updateCard={this.updateCard}/>
          <IncorrectButton incrementIncorrect={this.incrementIncorrect}/>
        </div>
      </div>
    )
  }
}

export default App;