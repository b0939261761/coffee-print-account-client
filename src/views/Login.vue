<template>
  <PageCustom>
    <div class = 'login-background' />

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

      <BtnSignIn
        :disabled = '!login || !password'
        @click = 'onSubmit'
      />
    </form>
  </PageCustom>
</template>

<script>
import { authLogin } from '@/utils/http';

import PageCustom from '@/components/Common/Page/PageCustom.vue';
import InputText from '@/components/Base/InputText.vue';
import BtnSignIn from '@/components/Login/BtnSignIn.vue';
import SelectLanguage from '@/components/Common/SelectLanguage.vue';

export default {
  name: 'Login',
  components: {
    PageCustom,
    InputText,
    BtnSignIn,
    SelectLanguage
  },
  data: () => ({
    login: 'admin',
    password: '6k3vddrb2v'
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
      const data = { username: this.login, password: this.password };

      try {
        const { headers } = await authLogin(data);
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
