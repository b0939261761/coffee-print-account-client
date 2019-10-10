<template>
  <FormModal @cancel = 'onCancel'>
    <template slot = 'header'>
      {{ modalTitleEditCartridgeText }}
    </template>

    <template slot = 'body'>
      <InputText
        v-model = 'quantityResourceChange'
        placeholder = 'XXXXX'
        :label = 'quantityResourceText'
        type = 'number'
        inputmode = 'number'
      />      <InputText
        v-model = 'quantityResourceChange'
        placeholder = 'XXXXX'
        :label = 'quantityResourceText'
        type = 'number'
        inputmode = 'number'
      />

      <InputSwitch
        v-model = 'activeChange'
        :label = 'activeText'
      />
    </template>

    <template slot ='footer'>
      <BtnOk
        class = 'btn-selected-picture--margin'
        :disabled = 'quantityResourceChange === quantityResource && activeChange === active'
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
import InputText from '@/components/Base/InputText.vue';
import InputSwitch from '@/components/Base/InputSwitch.vue';
import BtnOk from '@/components/Common/BtnOk.vue';
import BtnCancel from '@/components/Common/BtnCancel.vue';

export default {
  name: 'FormModalEditCartridge',
  components: {
    FormModal,
    InputText,
    InputSwitch,
    BtnOk,
    BtnCancel
  },
  props: {
    code: {
      required: true,
      type: String
    },
    quantityResource: {
      required: true,
      type: Number
    },
    active: {
      required: true,
      type: Boolean
    }
  },
  data() {
    return {
      quantityResourceChange: this.quantityResource,
      activeChange: this.active
    };
  },
  computed: {
    modalTitleEditCartridgeText() {
      return this.$t('modalTitleEditCartridge', [this.code]);
    },
    quantityResourceText() {
      return `${this.$t('quantityResource')}`;
    },
    activeText() {
      return `${this.$t('active')}`;
    }
  },
  methods: {
    onOk() {
      this.$emit('ok',
        { quantityResource: this.quantityResourceChange, active: this.activeChange });
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
