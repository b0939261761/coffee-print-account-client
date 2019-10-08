<template>
  <th class = 'table-head-cell'>
    <slot />
  </th>
</template>

<script>
export default {
  name: 'TableHeadCell'
};
</script>

<style scoped>
.table-head-cell {
  position: sticky;
  top: 0;
  z-index: 1;
  overflow: hidden;
  color: rgba(0, 0, 0, .54);
  background-color: white;
  box-shadow: inset 0 -.1rem 0 0 rgba(0, 0, 0, .12);
}
</style>
