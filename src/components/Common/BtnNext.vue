<template>
  <Btn
    :label = 'label'
    v-bind = '$attrs'
    @click = 'onClick'
  >
    <template #icon>
      <Icon />
    </template>
  </Btn>
</template>

<script>
import Btn from '@/components/Base/Btn.vue';
import Icon from '@/assets/arrow-right.svg';

export default {
  name: 'BtnNext',
  components: {
    Btn,
    Icon
  },
  computed: {
    label() {
      return this.$t('next');
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>
