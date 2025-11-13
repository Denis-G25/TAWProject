<template>
  <div class="border p-3 rounded mb-2 bg-gray-800">
    <h3 class="font-bold">{{ name }}</h3>
    <p class="text-sm text-gray-400">{{ players }} players</p>

    <div class="mt-2 flex gap-2">
      <button
        @click="$emit('view-details')"
        class="border px-3 py-1 text-sm"
      >
        View Details
      </button>
      <button
        @click="$emit('join-team')"
        class="border px-3 py-1 text-sm"
      >
        Join Team
      </button>
      <button
        @click="$emit('create-team')"
        class="border px-3 py-1 text-sm"
      >
        Create Team
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    name: String,
    players: Number,
  },
  emits: ['view-details', 'join-team', 'create-team'],
};
</script>
