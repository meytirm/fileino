<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="row">
          <q-avatar>
            <img alt="" src="../assets/logo.png" />
          </q-avatar>
          <span class="q-mr-md">فایلینو</span>
          <template v-for="link in links" :key="link.label" class="row">
            <q-separator dark vertical />
            <q-btn stretch flat :label="link.label" />
          </template>
        </q-toolbar-title>
        <q-separator dark vertical />
        <q-btn stretch flat label="ورود" />
        <q-separator dark vertical />
        <q-btn stretch flat label="ثبت نام" />
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
export default {
  name: 'WebsiteLayout.vue',
  setup() {
    const links = [
      { name: 'Newest', label: 'جدیدترین' },
      { name: 'Javascript', label: 'جاوااسکریپت' },
      { name: 'Laravel', label: 'لاراول' },
    ]

    return {
      links,
    }
  },
}
</script>

<style scoped></style>
