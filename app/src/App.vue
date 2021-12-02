<template>
  <v-app>
    <v-main>
      <v-overlay class="row justify-center align-center" v-model="overlay">
        <v-progress-circular indeterminate size="64" />
      </v-overlay>
      <component :is="$route.meta.layout || 'div'">
        <router-view />
      </component>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    overlay: true,
  }),

  mounted() {
    setTimeout(() => {
      this.overlay = false
    }, 1000)
  },
}
</script>
