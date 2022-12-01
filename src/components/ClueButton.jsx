import React, { Component } from 'react';
import '../styles/ClueButton.css';
import PropTypes from 'prop-types';

class ClueButton extends Component {
  render() {
    return (
      <div className="clueButtonContainer">
        <button 
          className="btn"
          onClick={this.props.updateCard}
        >
            Get Random Clue
        </button>
      </div>
    )
  }
}

ClueButton.propTypes = {
  updateCard: PropTypes.func
};

export default ClueButton;