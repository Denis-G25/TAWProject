<template>
  <div class="border rounded p-4 bg-gray-800 text-center">
    <p class="mb-4">{{ message }}</p>
    <div class="flex gap-3 justify-center">
      <button class="border px-4 py-2" @click="$emit('confirm')">Confirm</button>
      <button class="border px-4 py-2" @click="$emit('cancel')">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmDialog",
  props: {
    message: String,
  },
  emits: ["confirm", "cancel"],
};
</script>
