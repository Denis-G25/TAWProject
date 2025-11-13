<template>
  <label class="flex items-center gap-2 mb-2">
    <input type="checkbox" />
    <span>{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: "SettingsToggle",
  props: {
    label: String,
  },
};
</script>
