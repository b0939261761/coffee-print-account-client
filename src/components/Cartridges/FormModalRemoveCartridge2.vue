<template>
  <FormModal @cancel = 'onCancel'>
    <template slot = 'header'>
      {{ modalTitleRemoveText }}
    </template>

    <template slot = 'body'>
      {{ modalMessageRemoveText }}
    </template>

    <template slot ='footer'>
      <BtnOk
        class = 'btn-selected-picture--margin'
        @click = 'onOk'
      />

      <BtnCancel
        color-theme = 'outline'
        @click = 'onCancel'
      />
    </template>
  </FormModal>
</template>

<script>
import FormModal from '@/components/Common/FormModal.vue';
import BtnOk from '@/components/Common/BtnOk.vue';
import BtnCancel from '@/components/Common/BtnCancel.vue';

export default {
  name: 'FormModalRemoveCartridge',
  components: {
    FormModal,
    BtnOk,
    BtnCancel
  },
  props: {
    code: {
      required: true,
      type: String
    }
  },
  computed: {
    modalTitleRemoveText() {
      return this.$t('modalTitleRemove');
    },
    modalMessageRemoveText() {
      return this.$t('modalMessageRemove', [this.code]);
    }
  },
  methods: {
    onOk() {
      this.$emit('ok');
    },
    onCancel() {
      this.$emit('cancel');
    }
  }
};
</script>

<style scoped>
.btn-selected-picture--margin {
  margin-right: 1.6rem;
}
</style>
