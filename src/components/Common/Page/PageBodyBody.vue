<template>
  <div class = 'page-body-body'>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PageBodyBody'
};
</script>

<style scoped>
.page-body-body {
  flex-grow: 1;
  height: 100%;
}
</style>
