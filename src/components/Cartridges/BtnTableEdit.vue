<template>
  <BtnTable
    :title = 'title'
    @click = 'onClick'
  >
    <template #icon>
      <IconEdit />
    </template>
  </BtnTable>
</template>

<script>
import IconEdit from '@/assets/edit.svg';
import BtnTable from '@/components/Base/BtnTable.vue';

export default {
  name: 'BtnTableEdit',
  components: {
    IconEdit,
    BtnTable
  },
  computed: {
    title() {
      return this.$t('edit');
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>
