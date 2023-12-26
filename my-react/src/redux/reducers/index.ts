
// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './CountReducer';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default rootReducer;
