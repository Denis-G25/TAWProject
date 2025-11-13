<template>
  <textarea
    :placeholder="placeholder"
    class="border p-2 w-full mb-2 rounded bg-gray-800 text-white min-h-[120px]"
  ></textarea>
</template>

<script>
export default {
  name: "PostTextarea",
  props: {
    placeholder: String,
  },
};
</script>
