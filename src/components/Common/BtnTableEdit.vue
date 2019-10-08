<template>
  <BtnTable
    :title = 'title'
    @click = 'onClick'
  >
    <template #icon>
      <Icon />
    </template>
  </BtnTable>
</template>

<script>
import BtnTable from '@/components/Base/BtnTable.vue';
import Icon from '@/assets/edit.svg';

export default {
  name: 'BtnTableEdit',
  components: {
    BtnTable,
    Icon
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
