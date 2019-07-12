<template>
  <Btn
    :label = 'label'
    @click = 'onClick'
  >
    <template #icon>
      <IconSignIn />
    </template>
  </Btn>
</template>

<script>
import IconSignIn from '@/assets/sign-in.svg';
import Btn from '@/components/Base/Btn.vue';

export default {
  name: 'BtnSignIn',
  components: {
    IconSignIn,
    Btn
  },
  computed: {
    label() {
      return this.$t('signIn');
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>
