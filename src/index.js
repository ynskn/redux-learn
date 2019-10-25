import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux'; //connects our global states for store to the entire app


const myStore = createStore(
  allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(

  <Provider store={myStore}>
  <App />
  </Provider>,

  document.getElementById('root')
);


/*
//STORE ---> global state that holds all the data or state for our application
// REDUX is a state controller ---> makes sense?





//ACTION increment --> DESCRIBES WHAT WE WANT TO DO : NAMED BY "ICNREMENT"
const increment = () => {
  return {
    type: 'INCREMENT'   //ACTION NAME IS 'INCREMENT' name==> type same things
  };
};

const decrement = () => { //arrow function returns a piece of object
  return {
    type: 'DECREMENT' //ACTION NAME IS 'DECREMENT'
  };
};

// REDUCER --> HOW OUR ACTIONS TRANSFORM THE STATE TO THE NEXT STATE
const counter = (state = 0, action) => { //initial state of our counter looks like:
  switch (action.type) { //either look up for the two actions above
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};
// you can have multiple reducers
let store = createStore(counter);
//DISPLAY IT IN THE CONSOLE
store.subscribe(() => console.log(store.getState()));
// DISPATCH --> FINAL STATE WE EXECUTE THE ACTION
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA */
serviceWorker.unregister();
