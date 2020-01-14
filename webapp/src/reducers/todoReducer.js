import {
  GET_TODOS,
  TODOS_LOADING
} from '../actions/types'

const initialState = {
  todos: [],
  isLoading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_TODOS:
      return {
        ...state,
        isLoading: false,
        ...action.payload
      }
    case TODOS_LOADING:
      return {
        isLoading: true,
        ...state
      }
    default:
      return state;
  }
}