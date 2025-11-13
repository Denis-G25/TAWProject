<template>
  <div class="flex gap-2 mb-2">
    <input
      :placeholder="placeholder"
      class="border p-2 flex-1 rounded bg-gray-800 text-white"
    />
    <button class="border px-4 py-2 text-sm">
      Search
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    placeholder: String,
  },
};
</script>
