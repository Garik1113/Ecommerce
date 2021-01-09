import React from 'react';
import ReactDOM from 'react-dom';
import App  from './App';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router'
import { Provider } from 'react-redux';
import store, { history } from './store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
      <BrowserRouter>
            <Router history={history}>
              <App />
            </Router>
      </BrowserRouter> 
    </Provider>
  </React.StrictMode>
  
, 
document.getElementById('root'));