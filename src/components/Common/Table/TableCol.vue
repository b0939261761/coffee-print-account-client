<template>
  <col :style = '{ width }'>
</template>

<script>
export default {
  name: 'TableCol',
  props: {
    width: {
      validator: prop => typeof prop === 'string' || prop === null,
      default: null
    }
  }
};
</script>
