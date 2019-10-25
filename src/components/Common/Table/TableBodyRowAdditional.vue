<template>
  <tr
    :class = '["table-body-row", even]'
    v-on = '$listeners'
  >
    <slot />
  </tr>
</template>

<script>
export default {
  name: 'TableBodyRow',
  props: ['even']
};
</script>

<style scoped>
.table-body-row:not(:first-child) {
  border-top: none;
}

.even {
  background-color: #f5f5f5;
}

/* .even:not(:first-child) {
  border-top: .1rem solid rgba(0, 0, 0, .5);
}

.even:nth-child(2n) {
  background-color: #f5f5f5;
} */
</style>
