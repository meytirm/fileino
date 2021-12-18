import config from '@/services/axiosConfig'
import { UserModel } from '@/models/user/user.model'

export default {
  register(data: UserModel) {
    return config.post('register', data)
  },
  login(data: UserModel) {
    return config.post('login', data)
  },
  logout() {
    return config.post('logout')
  },
}
