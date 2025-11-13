<template>
  <button
    class="border px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",
  emits: ['click'],
};
</script>
