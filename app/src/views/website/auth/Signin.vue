<template>
  <q-page class="flex flex-center row">
    <q-form @submit="login" class="q-gutter-md col-3 column">
      <div class="text-h4 q-mb-xl text-center">ورود</div>

      <q-input
        filled
        v-model="email"
        type="email"
        label="ایمیل"
        hint="ایمیل را وارد کنید"
        :rules="[required()]"
      />

      <q-input
        filled
        :type="showPassword ? 'text' : 'password'"
        v-model="password"
        label="پسورد"
        hint="پسورد را وارد کنید"
        :rules="[minLength(6)]"
      >
        <template #append>
          <q-icon
            class="cursor-pointer"
            @click="showPassword = !showPassword"
            :name="showPassword ? 'ion-eye-off' : 'ion-eye'"
          />
        </template>
      </q-input>

      <q-checkbox v-model="accept" color="green" label="مرا به خاطر بسپار" />

      <div>
        <q-btn
          class="full-width"
          size="lg"
          label="ورود"
          type="submit"
          color="primary"
          icon="ion-ios-log-in"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script lang="ts">
import { ref } from 'vue'
import { validation } from '@/mixins/validation.mixin'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  name: 'Signin',
  mixins: [validation],
  setup() {
    const router = useRouter()
    const store = useStore()
    const email = ref('')
    const password = ref('')
    const accept = ref(false)
    const showPassword = ref(false)

    function login() {
      store
        .dispatch('login', {
          email: email.value,
          password: password.value,
        })
        .then((ok) => {
          if (ok) router.push({ name: 'UserIndex' })
        })
    }

    return {
      email,
      password,
      accept,
      showPassword,
      login,
    }
  },
  methods: {},
}
</script>

<style scoped></style>
