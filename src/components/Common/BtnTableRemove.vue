<template>
  <BtnTable
    :title = 'title'
    @click = '$emit("click")'
  >
    <template #icon>
      <Icon />
    </template>
  </BtnTable>
</template>

<script>
import BtnTable from '@/components/Base/BtnTable.vue';
import Icon from '@/assets/trash-alt.svg';

export default {
  name: 'BtnTableRemove',
  components: {
    BtnTable,
    Icon
  },
  computed: {
    title() {
      return this.$t('remove');
    }
  }
};
</script>
