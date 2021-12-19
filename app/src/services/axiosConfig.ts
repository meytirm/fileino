import { Notify } from 'quasar'
import axios from 'axios'
import store from '../store/index'

const config = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

let message = ''

config.interceptors.response.use(
  (response) => {
    if (response.data.message) {
      message = response.data.message
      Notify.create({
        message: message,
        type: 'positive',
      })
    }
    return response
  },
  (error) => {
    if (error.response) {
      if (error.response.data.error) {
        message = error.response.data.error
        Notify.create({
          message: message,
          type: 'negative',
        })
      }
    }
    return error
  }
)

export default config
