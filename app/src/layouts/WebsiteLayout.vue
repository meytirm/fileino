<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img
              alt=""
              src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
            />
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <slot />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img
              alt=""
              src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
            />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'WebsiteLayout.vue',
}
</script>

<style scoped></style>
