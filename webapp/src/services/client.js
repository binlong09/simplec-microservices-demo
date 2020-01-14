import axios from 'axios';
import Constants from './constants';

export const axiosInstance = axios.create({
  headers: { 'Content-Type': 'application/json' }
})