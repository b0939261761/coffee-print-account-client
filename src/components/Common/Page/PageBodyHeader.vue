<template>
  <div class = 'page-body-header'>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PageBodyHeader'
};
</script>

<style scoped>
.page-body-header {
  padding: 1rem 1rem 0;
  border-radius: .5rem .5rem 0 0;
  box-shadow: inset .2rem -.2rem 1rem 0 rgba(0, 0, 0, .2);
}
</style>
