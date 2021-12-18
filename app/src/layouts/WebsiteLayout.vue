<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="row">
          <router-link to="/">
            <q-avatar>
              <img alt="" src="../assets/logo.png" />
            </q-avatar>
          </router-link>

          <span class="q-mr-md">
            <router-link class="text-white" to="/">فایلینو</router-link>
          </span>

          <template v-for="link in links" :key="link.label" class="row">
            <q-separator dark vertical />
            <q-btn stretch flat :label="link.label" />
          </template>
        </q-toolbar-title>
        <template v-if="!loggedIn">
          <q-separator dark vertical />
          <q-btn :to="{ name: 'Signin' }" stretch flat label="ورود" />
          <q-separator dark vertical />
          <q-btn :to="{ name: 'Signup' }" stretch flat label="ثبت نام" />
        </template>
        <template v-else>
          <q-separator dark vertical />
          <q-btn @click="logout" stretch flat label="خارج شدن" />
          <q-separator dark vertical />
          <q-btn :to="{ name: 'UserIndex' }" stretch flat label="داشبورد" />
          <q-separator dark vertical />
        </template>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <slot />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img alt="" src="../assets/logo.png" />
          </q-avatar>
          فایلینیو
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { loggedStatusStore } from '@/store/helpers/logged-status.store'
import { useStore } from 'vuex'
export default {
  name: 'WebsiteLayout.vue',
  setup() {
    const store = useStore()
    const links = [
      { name: 'Newest', label: 'جدیدترین' },
      { name: 'Javascript', label: 'جاوااسکریپت' },
      { name: 'Laravel', label: 'لاراول' },
    ]

    function logout() {
      store.dispatch('logout')
    }

    return {
      links,
      logout,
    }
  },
  computed: {
    ...loggedStatusStore,
  },
}
</script>

<style scoped></style>
