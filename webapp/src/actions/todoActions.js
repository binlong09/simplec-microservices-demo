import { axiosInstance } from '../services/client'
import {
  GET_TODOS,
  TODOS_LOADING
} from './types'

export const getTodos = () => dispatch => {
  dispatch({ type: TODOS_LOADING })

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('token')
    }
  }

  axiosInstance.get('/api/todos', config)
    .then(res => dispatch({
      type: GET_TODOS,
      payload: res.data
    }))
    .catch(err => console.log(err))
}