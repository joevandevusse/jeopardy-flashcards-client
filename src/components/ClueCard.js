import React from 'react';
import { Component, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ClueCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: 'id',
          clue: 'clue',
          answer: 'answer',
        }
    }

    render() {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Clue Category</Card.Title>
              <Card.Text>
                The Internet loves videos of these people coming home and reuniting with their dogs, like Hannah Foraker with Buddy
              </Card.Text>
              <Card.Text>
                soldiers
              </Card.Text>
              <Button variant="primary">Get Random Clue</Button>
            </Card.Body>
          </Card>
        )
    }
}

export default ClueCard;