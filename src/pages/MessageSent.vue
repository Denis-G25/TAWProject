<template>
  <div class="p-6 max-w-md mx-auto text-center">
    <PageTitle>Message Sent</PageTitle>

    <CardContainer>
      <p class="text-sm text-gray-300">
        Your message has been sent. We will get back to you as soon as possible.
      </p>
    </CardContainer>

    <div class="mt-4 flex gap-2 justify-center">
      <AppButton @click="$router.push('/home')">
        Go to Home
      </AppButton>
      <BackButton @click="$router.push('/help')" />
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import CardContainer from "../components/CardContainer.vue";
import AppButton from "../components/AppButton.vue";
import BackButton from "../components/BackButton.vue";

export default {
  name: "MessageSent",
  components: { PageTitle, CardContainer, AppButton, BackButton },
};
</script>
