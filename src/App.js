import React, { Component } from 'react';
import './App.css';

import Background from './components/background/Background';
import Options from './components/options/Options';
import Question from './components/question/Question';

class App extends Component {
  render() {
    return (
      <Background>
        <Options />
      </Background>
    );
  }
}

export default App;
