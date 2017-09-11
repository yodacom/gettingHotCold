import React, { Component } from 'react';
import './app.css';
import GuessForm from './components/guess-form';
import ShowGuessNumber from './components/show-guess-number';
import ShowResult from './components/show-result';
import ShowGuesses from './components/show-guesses';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  guessEntered(value) {
    this.setState({ value: event.target.value });
  }

  handleChange(value) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <div className="nav">
          <ul>
            <li><a className="what" href="page">What ?</a></li>
            <li><a className="new" href="page2"> + New Game</a></li>
          </ul>
        </div>
        <h1>Hot or Cold</h1>
        <GuessForm onChange={
          value => this.guessEntered(value)
        }
        />
        <ShowGuessNumber />
        <ShowResult />
        <ShowGuesses />
      </div>
    );
  }
}

export default App;
