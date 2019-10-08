<template>
  <FormModal @cancel = 'onCancel'>
    <template #header>
      {{ titleText }}
    </template>

    <template #body>
      {{ bodyText }}
    </template>

    <template #footer>
      <BtnOk
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
  name: 'FormModalRemove',
  components: {
    FormModal,
    BtnOk,
    BtnCancel
  },
  props: {
    bodyText: {
      type: String,
      default: ''
    }
  },
  computed: {
    titleText() {
      return this.$t('modalTitleRemove');
    }
  },
  methods: {
    onCancel() {
      this.$emit('cancel');
    }
  }
};
</script>
