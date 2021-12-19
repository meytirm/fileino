<template>
  <div>
    <div class="column">
      <div v-for="post in posts.events" :key="post.id">{{ post }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import dashboard from '@/services/user/dashboard.service'
import { AxiosResponse } from 'axios'
import { ref, onMounted } from 'vue'
export default {
  name: 'UserIndex',
  setup() {
    let posts = ref([])
    dashboard
      .posts()
      .then((response) => {
        console.log(response)
        return response.data
      })
      .then((data) => {
        posts.value = data.events
      })

    return {
      posts,
    }
  },
}
</script>

<style scoped></style>
