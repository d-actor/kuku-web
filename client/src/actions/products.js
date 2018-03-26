import axios from 'axios' 
export const PRODUCTS = 'PRODUCTS'; 
export const ADD_PRODUCTS = 'ADD_PRODUCT' 
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'

export const getProducts = callback => {
  return (dispatch) => {
    axios.get('/api/products')
      .then( res => dispatch({ type: PRODUCTS, products: res.data } ))  
      .then(callback) 
      }
  }

export const addProduct = (product) => {
  return (dispatch) => {
    axios.post('/api/products', { product } ) 
    .then ( res => dispatch )
  }
}

export const updateProduct = (product) => {
  return (dispatch) => {
    axios.put(`/api/products/${product.id}`, { product } )
      .then ( res => dispatch({ type: UPDATE_PRODUCT, product: res.data }))
  }
}

export const deleteProduct = (id) => { 
  return(dispatch) => {
    axios.delete(`/api/products/${id}`)
      .then( () => dispatch({ type: DELETE_PRODUCT, id }))
  }
}