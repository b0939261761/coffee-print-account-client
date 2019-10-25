<template>
  <tr class = 'table-head-row'>
    <slot />
  </tr>
</template>

<script>
export default {
  name: 'TableHeadRow'
};
</script>

<style scoped>
.table-head-row {
  height: 5.6rem;
  /* border-bottom: .1rem solid rgba(0, 0, 0, .12); */
}
</style>
