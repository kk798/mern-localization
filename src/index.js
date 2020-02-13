import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import commonReducer from './commonReducer'
const store = createStore(commonReducer);
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}><App /></Provider>
  </BrowserRouter>, document.getElementById('root'));

