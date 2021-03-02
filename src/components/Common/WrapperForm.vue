<template functional>
  <div class = 'wrapper-form'>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'WrapperForm'
};
</script>

<style scoped>
.wrapper-form {
  max-width: 20rem;
  margin: 1rem auto;
}
</style>
