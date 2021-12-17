<template>
  <q-page class="flex flex-center row">
    <q-form @submit="onSubmit" class="q-gutter-md col-3 column">
      <div class="text-h4 q-mb-xl text-center">ثبت نام</div>

      <q-input
        filled
        v-model="name"
        type="text"
        label="نام"
        hint="نام خود را وارد کنید"
        :rules="[required()]"
      />

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

      <q-input
        filled
        :type="showPassword ? 'text' : 'password'"
        v-model="passwordConfirmation"
        label="تکرار پسورد"
        hint="پسورد را تکرار کنید"
        :rules="[minLength(6)]"
      />

      <div>
        <span class="text-red q-mb-md" v-if="!hasSamePassword"
          >پسورد یکسان انتخاب کنید!</span
        >
        <q-btn
          class="full-width q-mt-md"
          size="lg"
          label="ثبت نام"
          icon="ion-ios-person-add"
          type="submit"
          color="primary"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import { validation } from '@/mixins/validation.mixin'

export default {
  name: 'Signup',
  mixins: [validation],
  setup() {
    const email = ref('')
    const name = ref('')
    const password = ref('')
    const passwordConfirmation = ref('')
    const showPassword = ref(false)

    const hasSamePassword = computed(
      () => password.value === passwordConfirmation.value
    )

    function onSubmit() {
      console.log('sum')
    }

    return {
      email,
      name,
      password,
      passwordConfirmation,
      hasSamePassword,
      showPassword,
      onSubmit,
    }
  },
}
</script>

<style scoped></style>
