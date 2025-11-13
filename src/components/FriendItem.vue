<template>
  <li class="flex justify-between items-center border p-2 rounded">
    <span>{{ name }}</span>
    <div class="flex gap-2">
      <button class="border px-2 py-1 text-xs">Invite</button>
      <button class="border px-2 py-1 text-xs">Remove</button>
    </div>
  </li>
</template>

<script>
export default {
  name: "FriendItem",
  props: {
    name: String,
  },
};
</script>
