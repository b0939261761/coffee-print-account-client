<template>
  <div class = 'select-device'>
    <SelectLanguage />

    <form
      class = 'select-device__form'
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
      // this.$router.push({ name: 'selectPictureIndex', params: { code: this.code } });
      // this.code = '';
    },
    onGoSelectPicture() {
      // this.$router.push({ name: 'selectPictureIndex', params: { code: this.$store.state.device.code } });
    }
  }
};
</script>

<style scoped>
.select-device {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.select-device__form {
  max-width: 20rem;
}
</style>
