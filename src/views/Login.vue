<template>
  <div class = 'login'>
    <SelectLanguage />

    <form
      class = 'login__form'
      @submit.prevent = 'onSubmit'
    >
      <InputText
        v-model = 'login'
        type = 'email'
        placeholder = 'user@email.com'
        :label = 'emailText'
        inputmode = 'email'
      />

      <InputText
        v-model = 'password'
        type = 'text'
        placeholder = 'XXXXX'
        :label = 'passwordText'
      />

      <!-- :disabled = '!login || !password' -->
      <BtnSignIn
        @click = 'onSubmit'
      />
    </form>
  </div>
</template>

<script>
import InputText from '@/components/Base/InputText.vue';
import BtnSignIn from '@/components/Login/BtnSignIn.vue';
import SelectLanguage from '@/components/Common/SelectLanguage.vue';

export default {
  name: 'Login',
  components: {
    InputText,
    BtnSignIn,
    SelectLanguage
  },
  data: () => ({
    login: '',
    password: ''
  }),
  computed: {
    emailText() {
      return this.$t('email');
    },
    passwordText() {
      return this.$t('password');
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({ name: 'mainPage' });
    }
  }
};
</script>

<style scoped>
.login {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.login__form {
  max-width: 20rem;
}
</style>
