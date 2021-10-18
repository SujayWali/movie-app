import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

//-----------Curried from of function logger (obj, next, action)----------------
// const logger = function ({dispatch, getState}){
//   return function (next){
//     return function (action){
//       //MiddleWare Code
//       console.log("ACTION_TYPE = ",action.type);
//       next(action);
//     }
//   }
// }

// ----------Another Way of writing Middleware (Modifying Middleware)-------------
const logger = ({dispatch, getState}) => (next) => (action) => {
    //MiddleWare Code
    console.log("ACTION_TYPE = ",action.type);
    next(action);
}

//Creating the store
const store = createStore(rootReducer, applyMiddleware(logger));
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
