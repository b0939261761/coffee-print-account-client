<template>
  <div class = 'page-body-footer'>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PageBodyFooter'
};
</script>

<style scoped>
.page-body-footer {
  display: flex;
  margin-bottom: -1rem;
  padding: 1rem 1rem 0;
  border-radius: .5rem .5rem 0 0;
  box-shadow: inset .2rem -.2rem 1rem 0 rgba(0, 0, 0, .2);
}
</style>
