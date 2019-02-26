import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../stylesheets/Daggett.css';

class Daggett extends Component {
  render() {
    return (
      <div className="daggett">
        <div className="daggettImage">
          <img src={'https://i.imgur.com/jixf9LR.png'} alt="Uh Oh!" width="300px" height="auto" />
        </div>
        <div className="message">
          <h1> This page does not exist. Thanks anyway. </h1>
          <button type="button" className="button" onClick={() => this.props.history.push('/dashboard')}> Dashboard </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Daggett);
