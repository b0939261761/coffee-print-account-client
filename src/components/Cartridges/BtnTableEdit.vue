<template>
  <BtnTable
    :title = 'title'
    @click = 'onShowModal'
  >
    <template #icon>
      <Icon />
    </template>

    <portal
      v-if = 'showModal'
      to = 'formModal'
    >
      <FormModalEditCartridge
        :code = 'code'
        :quantity-resource = 'quantityResource'
        :active = 'active'
        @ok = 'onEdit'
        @cancel = 'onHideModal'
      />
    </portal>
  </BtnTable>
</template>

<script>
import BtnTable from '@/components/Base/BtnTable.vue';
import Icon from '@/assets/edit.svg';
import FormModalEditCartridge from '@/components/Cartridges/FormModalEditCartridge.vue';


export default {
  name: 'BtnTableEdit',
  components: {
    BtnTable,
    Icon,
    FormModalEditCartridge
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
    },
    showModal: {
      required: true,
      type: Boolean
    }
  },
  computed: {
    title() {
      return this.$t('edit');
    }
  },
  methods: {
    onShowModal() {
      this.$emit('showModal', true);
    },
    onHideModal() {
      this.$emit('showModal', false);
    },
    onEdit(obj) {
      this.$emit('edit', obj);
    }
  }
};
</script>
