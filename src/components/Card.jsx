import React, { Component } from 'react';
import '../styles/Card.css';
import PropTypes from 'prop-types';


class Card extends Component {
  render() {    
    return (
      <div className="card-container">
      <div className="card">
        <div className="front">
          <div className="clue" id="value">${this.props.value}</div>
          <div className="clue" id="category">{this.props.category}</div>
          <div className="clue">{this.props.clue}</div>
        </div>
        <div className="front back">
          <div className="answer">{this.props.answer}</div>
        </div>
      </div>
  </div>
    )
  }
}

Card.propTypes = {
  clue: PropTypes.string,
  answer: PropTypes.string
};

Card.defaultProps = {
  clue: "Default clue",
  answer: "Default answer"
}

export default Card;