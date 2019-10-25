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
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>
