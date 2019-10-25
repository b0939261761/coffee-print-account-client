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
import Icon from '@/assets/trash-alt.svg';

export default {
  name: 'TableBtnRemove',
  components: {
    BtnTable,
    Icon
  },
  computed: {
    title() {
      return this.$t('removeRecord');
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>
