import { axiosInstance } from '../services/client'
import axios from 'axios'
import { returnErrors } from './errorActions';
import {
  GET_EVENTS,
  EVENTS_LOADING
} from './types';

export const getEvents = () => dispatch => {
  dispatch({ type: EVENTS_LOADING });

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('token')
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
}