import React, { Component } from 'react';
import Button from '@mui/material/Button';
import './App.css'

class DynamicToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMessageShown: false // Initially, the message is not shown
    };
  }

  toggleMessage = () => {
    this.setState(prevState => ({
      isMessageShown: !prevState.isMessageShown // Toggle the boolean state
    }));
  }

  render() {
    return (
      <div className='a'>
      <h1>MY PROJECT</h1>
        <Button onClick={this.toggleMessage} variant="contained">
          {this.state.isMessageShown ? 'Hide' : 'Show'} Message
        </Button>

        {/* Conditionally rendering the message */}
        {this.state.isMessageShown && <p>This is a dynamic message!</p>}
      </div>
    );
  }
}

export default DynamicToggle;
