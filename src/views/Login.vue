<template>
  <PageCustom>
    <div class = 'login-background' />

    <SelectLanguage />

    <form
      class = 'login__form'
      @submit.prevent = 'onSubmit'
    >
      <InputText
        v-model = '$v.username.$model'
        type = 'text'
        placeholder = 'user@email.com'
        :label = 'emailText'
        :errors = '$v.username'
        inputmode = 'email'
      />

      <InputText
        v-model = '$v.password.$model'
        type = 'text'
        placeholder = 'XXXXXXX'
        :label = 'passwordText'
        :errors = '$v.password'
      />

      <BtnSignIn
        :disabled = '!username || !password'
        @click = 'onSubmit'
      />
    </form>
  </PageCustom>
</template>

<script>
import {
  required, maxLength, minLength, email
} from 'vuelidate/lib/validators';
import PageCustom from '@/components/Common/Page/PageCustom.vue';
import InputText from '@/components/Base/InputText.vue';
import BtnSignIn from '@/components/Login/BtnSignIn.vue';
import SelectLanguage from '@/components/Common/SelectLanguage.vue';

import { authLogin } from '@/utils/http';

const passwordValidator = value => /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[+-_~!?@#$%^&*])[\w+-_~!?@#$%^&*]{8,}$/.test(value);


export default {
  name: 'Login',
  components: {
    PageCustom,
    InputText,
    BtnSignIn,
    SelectLanguage
  },
  data: () => ({
    username: '',
    password: ''
    // username: 'admin',
    // password: '6k3vddrb2v'
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
    async onSubmit() {
      const { username, password } = this;

      try {
        const { headers } = await authLogin({ username, password });
        const { 'access-token': accessToken, 'refresh-token': refreshToken } = headers;
        this.$store.dispatch('auth/setTokens', { accessToken, refreshToken });
        this.$router.push({ name: 'mainPage' });
      } catch (err) {
        if (err.message === 'FAIL_AUTH') {
          this.$store.dispatch('auth/removeTokens');
          this.password = '';
        }
      }
    }
  },
  validations: {
    username: {
      required,
      maxLength: maxLength(100),
      email
    },
    password: {
      required,
      password: passwordValidator,
      minLength: minLength(8),
      maxLength: maxLength(30)
    }
  }
};
</script>

<style scoped>
.login-background {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image:
    url('../assets/logo-white.png'),
    url('../assets/background-bottom.png');
  background-repeat: no-repeat;
  background-position:
    center 5rem,
    center bottom;
  background-size:
    17rem auto,
    calc(100% - 2rem) auto;
}

.login__form {
  max-width: 20rem;
}
</style>
