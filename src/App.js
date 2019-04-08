import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Background from './components/background/Background';
import Options from './components/options/Options';
import Question from './components/question/Questions';

class App extends Component {
  render() {
    return (
      <Router>
        <Background>
          <Route exact path="/" component={Options} />
          <Route path ="/questions" component={Question} />
        </Background>
      </Router>
    );
  }
}

export default App;
