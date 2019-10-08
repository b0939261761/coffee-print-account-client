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
import Icon from '@/assets/chevron-left.svg';

export default {
  name: 'TableBtnPrev',
  components: {
    BtnTable,
    Icon
  },
  computed: {
    title() {
      return this.$t('previousPage');
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>
