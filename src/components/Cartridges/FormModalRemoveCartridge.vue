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
        @click = 'onCancel'
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
    cartridgeCode: {
      required: true,
      type: String
    }
  },
  computed: {
    modalTitleRemoveText() {
      return this.$t('modalTitleRemove');
    },
    modalMessageRemoveText() {
      return this.$t('modalMessageRemove', [this.cartridgeCode]);
    }
  },
  methods: {
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
