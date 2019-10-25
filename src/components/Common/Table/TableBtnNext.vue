<template>
  <BtnTable
    :title = 'title'
    color-theme = 'outline'
    @click = 'onClick'
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
  name: 'TableBtnNext',
  components: {
    BtnTable,
    Icon
  },
  computed: {
    title() {
      return this.$t('nextPage');
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>
