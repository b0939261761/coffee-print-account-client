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
import Icon from '@/assets/brush.svg';

export default {
  name: 'BtnCartridges',
  components: {
    Btn,
    Icon
  },
  computed: {
    label() {
      return this.$t('cartridges');
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>
