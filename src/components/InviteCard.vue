<template>
  <div class="border rounded p-4 bg-gray-800 text-center">
    <h2 class="text-xl font-semibold mb-2">Game Invite</h2>
    <p class="mb-4">{{ text }}</p>
    <div class="flex gap-3 justify-center">
      <button class="border px-4 py-2" @click="$emit('accept')">Accept</button>
      <button class="border px-4 py-2" @click="$emit('decline')">Decline</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InviteCard",
  props: {
    text: String,
  },
  emits: ["accept", "decline"],
};
</script>
