import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import App from './components/App';
import movies from './reducers';

//Creating the store
const store = createStore(movies);
console.log('store', store);
// console.log('BEFORE STATE', store.getState());

// // dispatching Actions
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'supreman'}]
// })
// console.log('BEFORE STATE', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store = {store} />
  </React.StrictMode>,
  document.getElementById('root')
);
