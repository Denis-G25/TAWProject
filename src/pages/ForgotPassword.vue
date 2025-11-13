<template>
  <div class="p-6 max-w-md mx-auto">
    <PageTitle>Forgot Password</PageTitle>

    <TextInput v-model="email" placeholder="Email" />

    <div class="flex gap-2 mt-4">
      <AppButton @click="$router.push('/message-sent')">
        Send Recovery Email
      </AppButton>

      <BackButton @click="$router.push('/login')" />
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import TextInput from "../components/TextInput.vue";
import AppButton from "../components/AppButton.vue";
import BackButton from "../components/BackButton.vue";

export default {
  name: "ForgotPassword",
  components: { PageTitle, TextInput, AppButton, BackButton },
  data() {
    return {
      email: "",
    };
  },
};
</script>

