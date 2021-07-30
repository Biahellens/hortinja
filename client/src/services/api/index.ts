import axios from 'axios'

import { setupInterceptorsTo } from './inteceptors'

export const specificAxios = setupInterceptorsTo(axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json'
  }
}))
