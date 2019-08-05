<template>
  <button
    :class = '["btn", classColorTheme]'
    @click.prevent = 'onClick'
    v-on = '$listeners'
  >
    <span class = 'btn__wrapper-icon'>
      <slot name = 'icon' />
    </span>

    <span
      ref = 'ripple'
      class = 'btn__ripple'
      :style = 'rippleStyle'
    />

    <slot />
  </button>
</template>

<script>
export default {
  name: 'BtnTable',
  props: {
    colorTheme: {
      type: String || null,
      validator: value => ['primary', 'outline'].includes(value),
      default: 'primary'
    }
  },
  data: () => ({
    rippleLeft: 0,
    rippleTop: 0,
    rippleSize: 0
  }),
  computed: {
    classColorTheme() {
      return `btn--${this.colorTheme}`;
    },
    rippleStyle() {
      return {
        left: `${this.rippleLeft}px`,
        top: `${this.rippleTop}px`,
        height: `${this.rippleSize}px`,
        width: `${this.rippleSize}px`
      };
    }
  },
  methods: {
    onClick({ pageX, pageY, target }) {
      const {
        top, left, width, height
      } = target.getBoundingClientRect();
      const size = Math.max(width, height);

      this.rippleSize = size;
      this.rippleLeft = pageX - left - size / 2;
      this.rippleTop = pageY - top - size / 2;

      const { ripple } = this.$refs;
      ripple.classList.remove('btn__ripple--show');
      setTimeout(() => ripple && ripple.classList.add('btn__ripple--show'), 0);
    }
  }
};
</script>

<style scoped>
.btn {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  overflow: hidden;
  vertical-align: top;
  color: white;
  background-color: #f7796a;
  border: none;
  border-radius: .2rem;
  outline: 0;
  box-shadow:
    0 .3rem .1rem -.2rem rgba(0, 0, 0, .2),
    0 .2rem .2rem 0 rgba(0, 0, 0, .14),
    0 .1rem .5rem 0 rgba(0, 0, 0, .12);
  cursor: pointer;
  appearance: button;
  user-select: none;
  will-change: box-shadow;
  fill: white;
}

.btn:active {
  box-shadow:
    0 .5rem .5rem -.3rem rgba(0, 0, 0, .2),
    0 .8rem 1rem .1rem rgba(0, 0, 0, .14),
    0 .3rem 1.4rem .2rem rgba(0, 0, 0, .12);
}

.btn:disabled {
  color: rgba(0, 0, 0, .26);
  background-color: rgba(0, 0, 0, .12);
  fill: rgba(0, 0, 0, .26);
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: currentColor;
  border-radius: inherit;
  opacity: 0;
  transition: opacity .3s cubic-bezier(.25, .8, .5, 1);
  pointer-events: none;
  will-change: opacity;
}

.btn:hover:enabled::before,
.btn:focus:enabled::before {
  opacity: .12;
}

.btn--outline {
  background-color: rgba(0, 0, 0, 0);
  fill: rgba(0, 0, 0, .87);
}

.btn--outline:hover:enabled,
.btn--outline:focus:enabled {
  color: rgba(0, 0, 0, .87);
  background-color: #f5f5f5;
}

.btn__wrapper-icon {
  height: 2rem;
  pointer-events: none;
}

.btn__wrapper-icon svg {
  height: 100%;
}

.btn__ripple {
  position: absolute;
  background-color: currentColor;
  border-radius: 50%;
  transform: scale(0);
  opacity: .5;
  pointer-events: none;
  will-change: opacity, transform;
}

.btn__ripple--show {
  animation: btn-ripple 1s cubic-bezier(.25, .8, .5, 1);
}

@keyframes btn-ripple {
  to {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
