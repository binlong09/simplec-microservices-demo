import {
  GET_EVENTS,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAIL,
  CREATE_EVENTS,
  CREATE_EVENTS_SUCCESS,
  CREATE_EVENTS_FAIL,
  UPDATE_EVENTS,
  UPDATE_EVENTS_SUCCESS,
  UPDATE_EVENTS_FAIL,
  DELETE_EVENTS,
  DELETE_EVENTS_SUCCESS,
  DELETE_EVENTS_FAIL,
  EVENTS_LOADING
} from '../actions/types';

const initialState = {
  events: null,
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
        events: action.payload
      }
    default:
      return state;
  }
}