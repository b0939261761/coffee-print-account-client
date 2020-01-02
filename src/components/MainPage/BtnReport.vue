<template>
  <Btn
    :label = 'label'
    @click = '$emit("click")'
  >
    <template #icon>
      <Icon />
    </template>
  </Btn>
</template>

<script>
import Btn from '@/components/Base/Btn.vue';
import Icon from '@/assets/file-chart-pie.svg';

export default {
  name: 'BtnReport',
  components: {
    Btn,
    Icon
  },
  computed: {
    label() {
      return this.$t('report');
    }
  }
};
</script>
