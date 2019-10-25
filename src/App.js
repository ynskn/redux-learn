import React from 'react';
import {useSelector, useDispatch} from 'react-redux'; //USEDISPATCH ENABLES US TO DISPATCH ACTIONS
import {increment, decrement} from './actions';
//import logo from './logo.svg';
//import './App.css';

function App() {
  const MyCount = useSelector(state => state.MyCount);
  const IsLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {MyCount}</h1>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>



      {IsLogged ? <h3>Valuable Information I should not see</h3> : ''}
    </div> //if function                                         //Else Statement
  );
}

export default App;
