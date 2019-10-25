<template>
  <FormModal @cancel = 'onCancel'>
    <template #header>
      {{ titleText }}
    </template>

    <template #body>
      <slot />
    </template>

    <template #footer>
      <BtnOk
        :disabled = 'disabledSuccess'
        margin-right = '2rem'
        @click = '$emit("success")'
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
  name: 'FormModalEdit',
  components: {
    FormModal,
    BtnOk,
    BtnCancel
  },
  props: {
    titleText: {
      type: String,
      default: ''
    },
    disabledSuccess: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onCancel() {
      this.$emit('cancel');
    }
  }
};
</script>
