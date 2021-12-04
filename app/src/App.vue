<template>
  <component :is="$route.meta || 'div'">
    <router-view />
  </component>
</template>

<script>
export default {
  name: "LayoutDefault",
};
</script>
