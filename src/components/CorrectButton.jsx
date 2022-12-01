import React, { Component } from 'react';
import '../styles/CorrectButton.css';
import PropTypes from 'prop-types';

class CorrectButton extends Component {
  render() {
    return (
      <div className="correctContainer">
        <button 
          className="correct"
          onClick={this.props.incrementCorrect}
        >
            Correct
        </button>
      </div>
    )
  }
}

CorrectButton.propTypes = {
  incrementCorrect: PropTypes.func
};

export default CorrectButton;