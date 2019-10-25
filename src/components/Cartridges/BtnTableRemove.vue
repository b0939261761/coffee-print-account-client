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
      <FormModalRemoveCartridge
        :code = 'code'
        @ok = 'onRemove'
        @cancel = 'onHideModal'
      />
    </portal>
  </BtnTable>
</template>

<script>
import BtnTable from '@/components/Base/BtnTable.vue';
import Icon from '@/assets/trash-alt.svg';
import FormModalRemoveCartridge from '@/components/Cartridges/FormModalRemoveCartridge.vue';

export default {
  name: 'BtnTableRemove',
  components: {
    BtnTable,
    Icon,
    FormModalRemoveCartridge
  },
  props: {
    code: {
      required: true,
      type: String
    },
    showModal: {
      required: true,
      type: Boolean
    }
  },
  computed: {
    title() {
      return this.$t('remove');
    }
  },
  methods: {
    onShowModal() {
      this.$emit('showModal', true);
    },
    onHideModal() {
      this.$emit('showModal', false);
    },
    onRemove() {
      this.$emit('remove');
    }
  }
};
</script>
