import axios from 'axios'

export const ApiConfig = axios.create({
  baseURL: process.env.REACT_APP_API || 'http://localhost:3333',
})
