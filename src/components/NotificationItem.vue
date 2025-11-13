<template>
  <li class="border p-2 flex justify-between items-center">
    <span>{{ text }}</span>
    <button
      @click="$emit('mark-read')"
      class="border px-2 py-1 text-sm"
    >
      Mark as Read
    </button>
  </li>
</template>

<script>
export default {
  name: "NotificationItem",
  props: {
    text: String,
  },
  emits: ['mark-read'],
};
</script>
