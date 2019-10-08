<template>
  <td
    class = 'table-body-cell'
    :style = 'styles'
  >
    <slot />
  </td>
</template>

<script>
export default {
  name: 'TableBodyCell',
  props: {
    textAlign: {
      type: String,
      default: 'center',
      validator: value => ['left', 'center', 'right'].indexOf(value) !== -1
    }
  },
  computed: {
    styles() {
      return { textAlign: this.textAlign };
    }
  }
};
</script>

<style scoped>
.table-body-cell {
  padding: .5rem;
  font-size: 1.3rem;
  color: rgba(0, 0, 0, .87);
}
</style>
