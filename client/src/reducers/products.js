import {
  PRODUCTS,
} from '../actions/products'

const products = (state = [], action ) => {
  switch(action.type) {
    case PRODUCTS:
      return action.products
    default:
      return state;
  }
}

export default products;
