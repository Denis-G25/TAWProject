<template>
  <div class="p-6 max-w-md mx-auto">
    <PageTitle>Create Post</PageTitle>

    <TextInput v-model="title" placeholder="Post title" />

    <textarea
      v-model="content"
      placeholder="Write your post..."
      class="border p-2 w-full mb-4 rounded bg-gray-800 text-white min-h-[140px]"
    ></textarea>

    <div class="flex gap-2">
      <AppButton @click="$router.push('/home')">
        Post
      </AppButton>
      <BackButton @click="$router.push('/home')" />
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import TextInput from "../components/TextInput.vue";
import AppButton from "../components/AppButton.vue";
import BackButton from "../components/BackButton.vue";

export default {
  name: "CreatePost",
  components: { PageTitle, TextInput, AppButton, BackButton },
  data() {
    return {
      title: "",
      content: "",
    };
  },
};
</script>
