<template>
  <table class = 'table-custom'>
    <slot />
  </table>
</template>

<script>
export default {
  name: 'TableCustom'
};
</script>

<style scoped>
.table-custom {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-size: 1.3rem;
  user-select: none;
}
</style>
