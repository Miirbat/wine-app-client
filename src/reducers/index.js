import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import infoReducer from './infoReducer';

const rootReducer = combineReducers({
  account: accountReducer,
  info: infoReducer
});

export default rootReducer;
