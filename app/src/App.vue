<template>
  <component :is="$route.meta.layout || 'div'">
    <router-view />
  </component>
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
