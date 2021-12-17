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
      message: 'موفق',
      type: 'positive',
    })
    return response
  },
  (error) => {
    Notify.create({
      message: 'ارور',
      type: 'negative',
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
