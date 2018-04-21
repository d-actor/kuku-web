import axios from 'axios'
export const USER = 'USER';
export const ADD_USERS = 'ADD_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'

export const getUser = (cb) => {
  return (dispatch) => {
    axios.get('/api/users')
      .then( res => dispatch({ type: USER, user: res.data } ))
      .then(cb)
      }
  }

export const addUser = (user) => {
  return (dispatch) => {
    axios.post('/api/users', { user } )
    .then ( res => dispatch )
  }
}

export const updateUser = (user) => {
  return (dispatch) => {
    axios.put(`/api/user/${user.id}`, { user } )
      .then ( res => dispatch({ type: UPDATE_USER, user: res.data }))
  }
}

export const deleteUser = (id) => {
  return(dispatch) => {
    axios.delete(`/api/user/${id}`)
      .then( () => dispatch({ type: DELETE_USER, id }))
  }
}
