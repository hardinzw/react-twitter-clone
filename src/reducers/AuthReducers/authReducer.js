import { SET_CURRENT_USER, USER_LOADING } from '../../constants/AuthConstants';

const initialState = {
  isAuthenticated: false,
  user: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: Object.keys(action.payload).length !== 0,
        user: action.payload
      };
    default: 
      return state
  }
}