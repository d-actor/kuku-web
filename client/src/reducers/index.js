import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import products from './products';

const rootReducer = combineReducers({
  user,
  flash,
  products
});

export default rootReducer;
