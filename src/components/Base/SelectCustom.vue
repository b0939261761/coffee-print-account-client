<template>
  <select @change = '$emit("input", +$event.target.value)'>
    <option
      value = ''
      selected
      v-text = 'placeholder'
    />
    <option
      v-for = '(item, index) in items'
      :key = 'index'
      :value = 'item.value'
      :selected = 'item.value === value'
      v-text = 'item.label'
    />
  </select>
</template>

<script>
export default {
  name: 'SelectCustom',
  props: {
    value: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    items() {
      return this.data;
    }
  },
  methods: {
    onClick() { }
  }
};
</script>
