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
import Icon from '@/assets/sign-out.svg';

export default {
  name: 'BtnSignOut',
  components: {
    Btn,
    Icon
  },
  computed: {
    label() {
      return this.$t('signOut');
    }
  }
};
</script>
