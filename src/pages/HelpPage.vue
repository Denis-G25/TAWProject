<template>
  <div class="p-6 max-w-xl mx-auto">
    <PageTitle>Help / FAQ</PageTitle>

    <CardContainer>
      <SectionTitle>How do I join a team?</SectionTitle>
      <p class="text-sm text-gray-300">
        Go to the Games page, choose a game, then use "Join Team" on the team you want.
      </p>
    </CardContainer>

    <CardContainer>
      <SectionTitle>How do I create a new team?</SectionTitle>
      <p class="text-sm text-gray-300">
        From the Games page, use the "Create Team" button and fill in the form.
      </p>
    </CardContainer>

    <CardContainer>
      <SectionTitle>How do I reset my password?</SectionTitle>
      <p class="text-sm text-gray-300">
        Use the "Forgot Password" link from the Login page and follow the instructions.
      </p>
    </CardContainer>

    <div class="mt-4 flex gap-2">
      <AppButton @click="$router.push('/contact')">
        Contact Support
      </AppButton>
      <BackButton @click="$router.push('/home')" />
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import SectionTitle from "../components/SectionTitle.vue";
import CardContainer from "../components/CardContainer.vue";
import AppButton from "../components/AppButton.vue";
import BackButton from "../components/BackButton.vue";

export default {
  name: "HelpPage",
  components: {
    PageTitle,
    SectionTitle,
    CardContainer,
    AppButton,
    BackButton,
  },
};
</script>

