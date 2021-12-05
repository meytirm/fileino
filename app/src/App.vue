<template>
  <component :is="$route.meta">
    <router-view />
  </component>
</template>

<script>
export default {
  name: 'LayoutDefault',
}
</script>
