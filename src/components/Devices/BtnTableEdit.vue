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
      <FormModalEditDevice
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
import FormModalEditDevice from '@/components/Devices/FormModalEditDevice.vue';


export default {
  name: 'BtnTableEdit',
  components: {
    BtnTable,
    Icon,
    FormModalEditDevice
  },
  props: {
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
