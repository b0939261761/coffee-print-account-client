<template>
  <div class='input-text'>
    <input
      :id = '$options.inputId'
      :value = 'value'
      :placeholder = 'placeholder'
      class = 'input'
      @input = 'onInput'
    >
    <label
      :for = '$options.inputId'
      class = 'label'
      v-text = 'label'
    />
  </div>
</template>

<script>
export default {
  name: 'InputPassword',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      validator: prop => typeof prop === 'string' || prop === null,
      default: null
    },
    label: {
      validator: prop => typeof prop === 'string' || prop === null,
      default: ''
    },
    inputmode: {
      type: String,
      default: null
    }
  },
  created() {
    // eslint-disable-next-line no-underscore-dangle
    this.$options.inputId = this._uid;
  },
  methods: {
    onInput(event) {
      const { value } = event.target;
      this.$emit('input', this.type === 'number' ? +value : value);
    }
  }
};
</script>

<style scoped>
.input-text {
  position: relative;
  margin: 0 auto;
  padding-top: 1.5rem;
  text-align: left;
}

.input,
.label {
  width: 100%;
  margin-bottom: 1.5rem;
  padding: .6rem 1.2rem;
  font-size: 1.6rem;
}

.label {
  position: absolute;
  top: 1.5rem;
  left: 0;
  width: 120%;
  overflow: hidden;
  color: #495057;
  white-space: nowrap;
  text-overflow: ellipsis;
  transform: translateY(-2.5rem) scale(.8);
  transform-origin: 0 0;
  transition:
    transform .3s cubic-bezier(.25, .8, .5, 1),
    width .3s cubic-bezier(.25, .8, .5, 1),
    color .3s cubic-bezier(.25, .8, .5, 1);
  will-change: transform;
}

.input {
  display: block;
  height: calc(3.6rem + .2rem);
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: .1rem solid #ced4da;
  border-radius: .4rem;
  transition:
    border-color .15s ease-in-out,
    box-shadow .15s ease-in-out;
}

.input:not(:hover):not(:focus):placeholder-shown + .label {
  width: 100%;
  color: #a5a5a5;
  transform: translateY(0) scale(1);
  pointer-events: none;
}

.input.placeholder-shown:not(:hover):not(:focus) + .label {
  width: 100%;
  color: #a5a5a5;
  transform: translateY(0) scale(1);
  pointer-events: none;
}

.input::placeholder {
  color: transparent;
  transition: color .3s cubic-bezier(.25, .8, .5, 1);
}

.input:focus::placeholder,
.input:hover::placeholder {
  color: #a5a5a5;
}

.input:focus {
  color: #495057;
  background-color: white;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 .32rem rgba(0, 123, 255, .25);
}
</style>
