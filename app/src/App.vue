<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
export default {
  name: 'LayoutDefault',
  computed: {
    layout() {
      return this.$route.meta.layout || 'div'
    },
  },
}
</script>
