<template>
  <button
    class="border px-4 py-2 rounded text-sm"
    @click="$emit('click')"
  >
    ← Back
  </button>
</template>

<script>
export default {
  name: "BackButton",
  emits: ['click'],
};
</script>
