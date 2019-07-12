<template>
  <BtnTable
    :title = 'title'
    @click = 'onClick'
  >
    <template #icon>
      <IconTrashAlt />
    </template>

    <portal
      v-if = 'modalOpen'
      to = 'formModal'
    >
      <FormModalRemoveCartridge
        :cartridge-code = 'cartridgeCode'
        @cancel = 'modalOpen = false'
      />
    </portal>
  </BtnTable>
</template>

<script>
import IconTrashAlt from '@/assets/trash-alt.svg';
import BtnTable from '@/components/Base/BtnTable.vue';
import FormModalRemoveCartridge from '@/components/Cartridges/FormModalRemoveCartridge.vue';

export default {
  name: 'BtnTableRemove',
  components: {
    IconTrashAlt,
    BtnTable,
    FormModalRemoveCartridge
  },
  props: {
    cartridgeCode: {
      required: true,
      type: String
    }
  },
  data: () => ({
    modalOpen: false
  }),
  computed: {
    title() {
      return this.$t('remove');
    }
  },
  methods: {
    onClick() {
      this.modalOpen = true;
      this.$emit('click');
    }
  }
};
</script>
