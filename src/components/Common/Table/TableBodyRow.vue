<template>
  <tr
    class = 'table-body-row'
    v-on = '$listeners'
  >
    <slot />
  </tr>
</template>

<script>
export default {
  name: 'TableBodyRow'
};
</script>

<style scoped>
.table-body-row:not(:first-child) {
  border-top: .1rem solid rgba(0, 0, 0, .5);
}
</style>
