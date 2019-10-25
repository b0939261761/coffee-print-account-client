<template>
  <div class = 'page-custom'>
    <div class = 'page-custom__body'>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageCustom'

};
</script>

<style scoped>
.page-custom {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.page-custom__body {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50rem;
  max-width: calc(100% - 4rem);
  height: calc(100% - 2rem);
  margin: auto auto 0;
  overflow: hidden;
  background-color: rgba(255, 255, 255, .44);
  border-radius: .5rem .5rem 0 0;
  box-shadow: .2rem -.2rem 1rem 0 rgba(0, 0, 0, .2);
}
</style>
