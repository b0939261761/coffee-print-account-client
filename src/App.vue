<template>
  <div class = 'app'>
    <transition name = 'slide'>
      <router-view :key = '$router.currentRoute.name' />
    </transition>

    <portal-target name = 'formModal' />

    <ModalError />
  </div>
</template>


<script>
import ModalError from '@/components/App/ModalError.vue';

export default {
  name: 'App',
  components: {
    ModalError
  }
};
</script>

<style>

.slide-enter { transform: translateX(100%); }
.slide-enter-to { transform: translateX(0); }
.slide-enter-active { position: absolute; }

.slide-leave { transform: translateX(0); }
.slide-leave-to { transform: translateX(-100%); }

.slide-enter-active,
.slide-leave-active { transition: transform .75s ease-in-out; }

*,
::before,
::after {
  box-sizing: inherit;
}

::selection {
  color: black;
  text-shadow: none;
  background-color: #b3d4fc;
}

/* Стилизация scrollbar */
::-webkit-scrollbar {
  width: .6rem;
}

::-webkit-scrollbar-track {
  background-color: #f5f5f5;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
}

::-webkit-scrollbar-thumb {
  background-color: rgba(214, 41, 41, .8);
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(214, 41, 41, 1);
}

html {
  box-sizing: border-box;
  height: 100%;
  font-size: 10px;
  line-height: 1.5;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica', sans-serif;
  text-align: center;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.app {
  width: 100%;
  height: 100%;
  background-color: #f7796a;
}
</style>
