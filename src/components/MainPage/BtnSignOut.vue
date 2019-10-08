<template>
  <Btn
    :label = 'label'
    @click = 'onClick'
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
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>
