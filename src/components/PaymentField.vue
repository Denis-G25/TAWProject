<template>
  <div class="mb-2">
    <label class="block text-sm mb-1">{{ label }}</label>
    <input
      :placeholder="placeholder"
      class="border p-2 w-full rounded bg-gray-800 text-white"
    />
  </div>
</template>

<script>
export default {
  name: "PaymentField",
  props: {
    label: String,
    placeholder: String,
  },
};
</script>
