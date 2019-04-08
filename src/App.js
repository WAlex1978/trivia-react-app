import React, { Component } from 'react';
import './App.css';

import Options from './components/options/Options';
import Question from './components/question/Question';

class App extends Component {
  render() {
    return (
      <div>
        <Options />
        <Question />
      </div>
    );
  }
}

export default App;
