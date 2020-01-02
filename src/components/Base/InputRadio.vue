<template>
  <fieldset class='input-radio'>
    <legend v-text = 'label' />
    <ul>
      <li
        v-for = 'item in items'
        :key = 'item.id'
      >
        <input
          :id = 'item.id'
          ref = 'input'
          :name = '$options.inputName'
          :value = 'item.value'
          type = 'radio'
          class = 'input-radio__input'
          :checked = 'item.value === value'
          @change = '$emit("input", item.value)'
        >
        <label
          :for = 'item.id'
          class = 'input-radio__label'
          v-text = 'item.label'
        />
      </li>
    </ul>
  </fieldset>
</template>
<script>
export default {
  name: 'InputRadio',
  props: {
    value: {
      type: [Number, String],
      default: 0
    },
    label: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    val: 0
  }),
  computed: {
    items() {
      return this.data.map((el, index) => ({ ...el, id: `${this.$options.inputName}${index}` }));
    }
  },
  created() {
    // eslint-disable-next-line no-underscore-dangle
    this.$options.inputName = this._uid;
  },
  methods: {
    onChange(event) {
      this.$emit('input', event.target.value);
    }
  }
};
</script>
