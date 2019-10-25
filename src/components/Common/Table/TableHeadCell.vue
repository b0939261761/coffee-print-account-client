<template>
  <th :class = 'className'>
    <slot />
  </th>
</template>

<script>
export default {
  name: 'TableHeadCell',
  props: {
    sticky: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return [
        'table-head-cell',
        { 'table-head-cell--sticky': this.sticky }
      ];
    }
  }
};
</script>

<style scoped>
.table-head-cell {
  overflow: hidden;
  color: rgba(0, 0, 0, .54);
  word-break: break-word;
  hyphens: auto;
  box-shadow: inset 0 -.1rem 0 0 rgba(0, 0, 0, .12);
}

.table-head-cell--sticky {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
}
</style>
