<template>
  <FormModal
    v-if = 'currentError'
    @cancel = 'onCloseModalError'
  >
    <template slot = 'header'>
      {{ currentError.title }}
    </template>

    <template slot = 'body'>
      <div
        class = 'modal-error__body'
        v-text = 'currentError.message'
      />
    </template>

    <template slot = 'footer'>
      <BtnOk @click = 'onCloseModalError' />
    </template>
  </FormModal>
</template>

<script>
import FormModal from '@/components/Common/FormModal.vue';
import BtnOk from '@/components/Common/BtnOk.vue';

export default {
  name: 'ModalError',
  components: {
    FormModal,
    BtnOk
  },
  computed: {
    currentError() {
      const error = this.$store.getters['errors/current'];
      if (!error) return null;
      const { code, data } = error;
      const title = this.$t(`errors.${code}.title`);
      const message = this.$t(`errors.${code}.message`, data);
      return { title, message };
    }
  },
  watch: {
    '$store.state.errors.error': {
      handler(val) {
        if (!val) return;

        if (val.code === 'REFRESH_TOKEN_INVALID') {
          this.$router.push({ name: 'login' });
        } else {
          this.$store.commit('errors/add');
        }
        this.$store.commit('errors/set', null);
      }
    }
  },
  methods: {
    onCloseModalError() {
      this.$store.commit('errors/remove');
    }
  }
};
</script>

<style scoped>
.modal-error__body {
  white-space: pre-wrap;
}
</style>
