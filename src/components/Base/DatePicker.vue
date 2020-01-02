<template>
  <div class='date-picker'>
    <input
      ref = 'input'
      :value = 'value'
      type='text'
      :placeholder = 'placeholder'
      class='input'
    >

    <label
      :for = '$options.inputId'
      class='label'
      v-text = 'label'
    />
  </div>
</template>

<script>
import Pikaday from 'pikaday';
import { formatDate, parseDate } from '@/utils/date';
import 'pikaday/css/pikaday.css';

export default {
  name: 'DatePicker',
  props: {
    value: {
      validator: prop => typeof prop === 'string' || prop === null,
      default: null
    },
    minDate: {
      validator: prop => typeof prop === 'string' || prop === null,
      default: null
    },
    maxDate: {
      validator: prop => typeof prop === 'string' || prop === null,
      default: null
    },
    label: {
      validator: prop => typeof prop === 'string' || prop === null,
      default: null
    }
  },
  computed: {
    placeholder() {
      return this.$t('datePicker.mask');
    }
  },
  watch: {
    value(val) {
      if (this.pikaday.toString() !== val) this.pikaday.setDate(val);
    },
    minDate(val) {
      this.pikaday.setMinDate(this.parseDateMask(val));
    },
    maxDate(val) {
      this.pikaday.setMaxDate(this.parseDateMask(val));
    }
  },
  created() {
    this.$options.inputId = this._uid;
  },
  mounted() {
    this.mask = 'DD.MM.YYYY';

    const pikadayOptions = {
      field: this.$refs.input,
      format: this.mask,
      minDate: this.parseDateMask(this.minDate),
      maxDate: this.parseDateMask(this.maxDate),
      firstDay: 1,
      i18n: this.$t('datePicker.calendar'),
      ariaLabel: this.$t('datePicker.ariaLabel'),
      toString: date => formatDate(this.mask, date),
      parse: dateString => this.parseDateMask(dateString),
      onSelect: () => this.$emit('input', this.pikaday.toString())
    };

    this.pikaday = new Pikaday(pikadayOptions);
  },
  destroyed() {
    this.pikaday.destroy();
  },
  methods: {
    parseDateMask(val) {
      return (val && parseDate(this.mask, val)) || null;
    }
  }
};
</script>

<style scoped>
.date-picker {
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
