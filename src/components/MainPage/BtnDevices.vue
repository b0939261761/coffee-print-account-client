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
import Icon from '@/assets/print.svg';

export default {
  name: 'BtnDevices',
  components: {
    Btn,
    Icon
  },
  computed: {
    label() {
      return this.$t('devices');
    }
  }
};
</script>
