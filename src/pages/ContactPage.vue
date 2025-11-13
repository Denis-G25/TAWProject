<template>
  <div class="p-6 max-w-md mx-auto">
    <PageTitle>Contact</PageTitle>

    <TextInput v-model="name" placeholder="Your Name" />
    <TextInput v-model="email" placeholder="Your Email" />
    <TextInput v-model="subject" placeholder="Subject" />

    <textarea
      v-model="message"
      placeholder="Your message..."
      class="border p-2 w-full mb-4 rounded bg-gray-800 text-white min-h-[120px]"
    ></textarea>

    <div class="flex gap-2">
      <AppButton @click="$router.push('/message-sent')">
        Send Message
      </AppButton>
      <BackButton @click="$router.push('/help')" />
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import TextInput from "../components/TextInput.vue";
import AppButton from "../components/AppButton.vue";
import BackButton from "../components/BackButton.vue";

export default {
  name: "ContactPage",
  components: { PageTitle, TextInput, AppButton, BackButton },
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
};
</script>
