<template>
  <BtnTable
    :title = 'title'
    color-theme = 'outline'
    @click = '$emit("click")'
  >
    <template #icon>
      <Icon />
    </template>
  </BtnTable>
</template>

<script>
import BtnTable from '@/components/Base/BtnTable.vue';
import Icon from '@/assets/chevron-right.svg';

export default {
  name: 'BtnTableNext',
  components: {
    BtnTable,
    Icon
  },
  computed: {
    title() {
      return this.$t('next');
    }
  }
};
</script>
