<template>
  <q-page class="flex flex-center"> index </q-page>
</template>

<script>
import service from '@/services/axiosConfig.ts'
export default {
  name: 'Index',
  mounted() {
    service.posts()
  },
}
</script>

<style scoped></style>
