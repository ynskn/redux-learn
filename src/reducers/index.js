import counterReducer from './counter';
import loggedReducer from './islogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  MyCount: counterReducer,
  isLogged : loggedReducer
});

export default allReducers;
