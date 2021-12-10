import { AxiosResponse } from 'axios'
import { Notify } from 'quasar'

import axios from 'axios'
const config = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

config.interceptors.response.use(
  (response) => {
    console.log(response)
    Notify.create({
      message: 'response',
    })
    return response
  },
  (error) => {
    Notify.create({
      message: 'error',
    })
    return error
  }
)

export default {
  posts() {
    config
      .get('/posts')
      .then((response: AxiosResponse<unknown>) => {
        return response.data
      })
      .then((data: AxiosResponse<unknown>) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
