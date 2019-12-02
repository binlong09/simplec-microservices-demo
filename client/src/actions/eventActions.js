import axios from 'axios';
import { returnErrors } from './errorActions';
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
} from './types';
import { tokenConfig } from './authActions';

export const getEvents = () => dispatch => {
  dispatch({ type: EVENTS_LOADING });

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjODgxODNhMzcwNDkzOWVjMGM0OTE5OCIsImlhdCI6MTU1NzQ1NTg3NCwiZXhwIjoxNTU3NDU5NDc0fQ.rf7Nu8C7FscwtI_qJvsNsZzHEEKmpVTRVegHN-oA4OA'
    }
  }

  axios
    .get('/api/events', config)
    .then(res => dispatch({
        type: GET_EVENTS,
        payload: res.data
      })
    )
    .catch(err =>
      // dispatch(returnErrors(err.response.data, err.response.status))
      console.log(err)
    );
  console.log("get event called")
}

export const createEvents = (date, text) => {
  console.log("Im here in actions boy");
  console.log(date.format());
  console.log(text);
}