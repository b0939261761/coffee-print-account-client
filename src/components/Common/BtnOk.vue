<template>
  <Btn
    :label = 'label'
    v-bind = '$attrs'
    @click = '$emit("click")'
  >
    <template #icon>
      <Icon />
    </template>
  </Btn>
</template>

<script>
import Btn from '@/components/Base/Btn.vue';
import Icon from '@/assets/check.svg';

export default {
  name: 'BtnOk',
  components: {
    Btn,
    Icon
  },
  computed: {
    label() {
      return this.$t('ok');
    }
  }
};
</script>
