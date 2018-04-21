import {
  USERS,
} from '../actions/users'

const products = (state = [], action ) => {
  switch(action.type) {
    case USERS:
      return action.users
    case UPDATE_USER:
    return state.map((u) => {
      if (u.id === action.user.id) {
        return action.users;
      }
      return u;
    });
    default:
      return state;
  }
}

export default users;
