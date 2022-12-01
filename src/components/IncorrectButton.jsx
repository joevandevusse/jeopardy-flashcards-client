import React, { Component } from 'react';
import '../styles/IncorrectButton.css';
import PropTypes from 'prop-types';

class IncorrectButton extends Component {
  render() {
    return (
      <div className="incorrectContainer">
        <button 
          className="incorrect"
          onClick={this.props.incrementIncorrect}
        >
            Incorrect
        </button>
      </div>
    )
  }
}

IncorrectButton.propTypes = {
  incrementIncorrect: PropTypes.func
};

export default IncorrectButton;