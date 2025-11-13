<template>
  <input
    :type="type"
    :placeholder="placeholder"
    class="border p-2 w-full mb-2 rounded bg-gray-800 text-white"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    modelValue: String,
    type: {
      type: String,
      default: 'text',
    },
    placeholder: String,
  },
  emits: ['update:modelValue'],
};
</script>
