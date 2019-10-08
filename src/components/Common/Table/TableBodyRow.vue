<template>
  <tr
    :style = 'styles'
    class = 'table-body-row'
  >
    <slot />
  </tr>
</template>

<script>
export default {
  name: 'TableBodyRow',
  props: {
    cursor: {
      type: String,
      default: 'auto',
      validator: value => ['auto', 'pointer'].indexOf(value) !== -1
    }
  },
  computed: {
    styles() {
      return { cursor: this.cursor };
    }
  }
};
</script>

<style scoped>
.table-body-row:not(:first-child) {
  border-top: .1rem solid rgba(0, 0, 0, .5);
}

.table-body-row:nth-child(2n) {
  background-color: #f5f5f5;
}
</style>
