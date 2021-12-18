import config from '@/services/axiosConfig'
import { AxiosResponse } from 'axios'

export default {
  posts() {
    return config.get('/dashboard')
  },
}
