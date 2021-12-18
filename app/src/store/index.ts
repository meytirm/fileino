import { createStore } from 'vuex'
import auth from '@/services/auth/auth.service'
import config from '@/services/axiosConfig'

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))

      config.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${userData.token}`
    },
    CLEAR_USER_DATA() {
      localStorage.clear()
      location.reload()
    },
  },
  actions: {
    register({ commit }, data) {
      return auth.register(data).then(({ data }) => {
        commit('SET_USER_DATA', data)
      })
    },
    login({ commit }, data) {
      return auth
        .login(data)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
          return true
        })
        .catch((e) => {
          return false
        })
    },
    logout({ commit }) {
      commit('CLEAR_USER_DATA')
    },
  },
  modules: {},
  getters: {
    loggedIn(state) {
      return !!state.user
    },
  },
})
