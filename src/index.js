import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import triviaReducer from './components/reducers/triviaReducer';

const store = createStore(triviaReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
