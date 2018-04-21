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

export const updateUser = (id, user, cb) => {
  return (dispatch) => {
    let { name, email } = user;
    let url = `/api/users/${id}?name=${name}&email=${email}`
    axios.put(url, user)
      .then( res => {
        dispatch({ 
          type: 'UPDATE_USER', 
          user: res.data, 
          headers: res.headers
        })
      })
        .then(cb)
        .catch((error) => {
        console.log("Problem updating User", error);
      
      });

  }
}


// export const updateUser = (id, name) => {
//   return (dispatch) => {
//     axios.put(`/api/users/${id}`, { name } )
//       .then ( res => dispatch({ type: UPDATE_USER, name: res.data }))
//   }
// }

export const deleteUser = (id) => {
  return(dispatch) => {
    axios.delete(`/api/user/${id}`)
      .then( () => dispatch({ type: DELETE_USER, id }))
  }
}
