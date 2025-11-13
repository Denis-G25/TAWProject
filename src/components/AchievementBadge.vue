<template>
  <div class="border rounded px-3 py-2 mb-2 bg-gray-800">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "AchievementBadge",
  props: {
    title: String,
  },
};
</script>
