<template>
  <div class='input-text'>
    <input
      :id = '$options.inputId'
      :value = 'value'
      :type = 'type'
      :placeholder = 'placeholder'
      :inputmode = 'inputmode'
      :spellcheck = 'spellcheck'
      :class='["input", { "input--error": isError }]'
      @input = 'onInput'
    >

    <label
      :for = '$options.inputId'
      :class='["label", { "label--error": isError }]'
      v-text = 'label'
    />

    <template v-if = 'isError'>
      <p
        v-for = 'error in errorList'
        :key = 'error'
        class = 'error'
        v-text = 'error'
      />
    </template>
  </div>
</template>

<script>
const errorParams = params => (params
  ? Object.entries(params)
    .reduce((acc, { 0: key, 1: value }) => (
      { ...acc, [key]: key !== 'type' ? value : undefined }
    ), {})
  : null);

const transformError = errors => Object.entries(errors)
  .reduce((acc, { 0: key, 1: value }) => {
    if (key[0] !== '$' && !value) {
      acc.push({ key, data: errorParams(errors.$params[key]) });
    }
    return acc;
  }, []);

export default {
  name: 'InputText',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      validator: prop => typeof prop === 'string' || prop === null,
      default: null
    },
    label: {
      validator: prop => typeof prop === 'string' || prop === null,
      default: ''
    },
    errors: {
      type: Object,
      default: () => ({})
    },
    mask: {
      type: Array || null,
      default: null
    },
    inputmode: {
      type: String,
      default: null
    },
    spellcheck: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    errorList() {
      return transformError(this.errors)
        .map(({ key, data }) => this.$t(`validation.${key}`, data));
    },
    isError() {
      return this.errors.$error;
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
.error {
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.2;
  color: #ff5252;
  word-break: break-word;
  hyphens: auto;
}

.input-text {
  position: relative;
  margin: 0 auto 1.5rem;
  padding-top: 1.8rem;
  text-align: left;
}

.input,
.label {
  width: 100%;
  margin-bottom: .8rem;
  padding: .6rem 1.2rem;
  font-size: 1.6rem;
}

.label {
  position: absolute;
  top: 1.8rem;
  left: 0;
  width: 120%;
  overflow: hidden;
  color: #495057;
  white-space: nowrap;
  text-overflow: ellipsis;
  transform: translateY(-2.3rem) scale(.8);
  transform-origin: 0 0;
  transition:
    transform .3s cubic-bezier(.25, .8, .5, 1),
    width .3s cubic-bezier(.25, .8, .5, 1),
    color .3s cubic-bezier(.25, .8, .5, 1);
  will-change: transform;
}

.label--error {
  color: #ff5252;
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

.input--error {
  border-color: #ff5252;
}

.input:not(:hover):not(:focus):placeholder-shown + .label {
  width: 100%;
  color: #a5a5a5;
  transform: translateY(0) scale(1);
  pointer-events: none;
}

.input:not(:hover):not(:focus):placeholder-shown + .label--error {
  color: #ff5252;
}

.input.placeholder-shown:not(:hover):not(:focus) + .label {
  width: 100%;
  color: #a5a5a5;
  transform: translateY(0) scale(1);
  pointer-events: none;
}

.input.placeholder-shown:not(:hover):not(:focus) + .label-error {
  color: #ff5252;
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
