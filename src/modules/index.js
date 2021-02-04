import { combineReducers } from 'redux';
import popup from './popup';
import auth from './auth';

const rootReducer = combineReducers({
  popup,
  auth,
});

export default rootReducer;
