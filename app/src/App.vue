<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { useStore } from 'vuex'

export default {
  name: 'LayoutDefault',
  setup() {
    const store = useStore()
    const loggedIn = localStorage.getItem('user')

    if (loggedIn) {
      const userData = JSON.parse(loggedIn)
      store.commit('SET_USER_DATA', userData)
    }
  },
  computed: {
    layout(): unknown {
      return this.$route.meta.layout || 'div'
    },
  },
}
</script>
