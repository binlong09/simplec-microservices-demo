import {
  GET_EVENTS,
  EVENTS_LOADING
} from '../actions/types';

const initialState = {
  events: [],
  isLoading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case EVENTS_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case GET_EVENTS:
      return {
        ...state,
        isLoading: false,
        ...action.payload
      }
    default:
      return state;
  }
}