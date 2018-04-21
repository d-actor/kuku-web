import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import products from './products';
import cart from './cart'; 

const rootReducer = combineReducers({
  user,
  flash,
  products,
  cart
});

export default rootReducer;
