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
import Icon from '@/assets/cloud-download.svg';

export default {
  name: 'BtnDownload',
  components: {
    Btn,
    Icon
  },
  computed: {
    label() {
      return this.$t('download');
    }
  }
};
</script>
