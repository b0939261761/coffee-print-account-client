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
import Icon from '@/assets/sign-in.svg';

export default {
  name: 'BtnSignIn',
  components: {
    Btn,
    Icon
  },
  computed: {
    label() {
      return this.$t('signIn');
    }
  }
};
</script>
