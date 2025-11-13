<template>
  <div class="p-6 max-w-xl mx-auto">
    <PageTitle>Chat</PageTitle>

    <CardContainer>
      <SectionTitle>Messages</SectionTitle>
      <p class="text-sm text-gray-300 mb-2">
        Here your messages with friends will appear (mockup).
      </p>
      <div class="border p-2 mb-3 min-h-[120px]">
        <p>User1: Hello!</p>
        <p>You: Hi, ready to play?</p>
      </div>

      <textarea
        v-model="newMessage"
        placeholder="Type a message..."
        class="border p-2 w-full mb-2 rounded bg-gray-800 text-white"
      ></textarea>

      <div class="flex gap-2">
        <AppButton>
          Send
        </AppButton>
        <BackButton @click="$router.push('/home')" />
      </div>
    </CardContainer>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import SectionTitle from "../components/SectionTitle.vue";
import CardContainer from "../components/CardContainer.vue";
import AppButton from "../components/AppButton.vue";
import BackButton from "../components/BackButton.vue";

export default {
  name: "Chat",
  components: {
    PageTitle,
    SectionTitle,
    CardContainer,
    AppButton,
    BackButton,
  },
  data() {
    return {
      newMessage: "",
    };
  },
};
</script>
