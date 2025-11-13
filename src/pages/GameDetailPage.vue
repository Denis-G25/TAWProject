<template>
  <div class="p-6 max-w-xl mx-auto">
    <PageTitle>Game Detail</PageTitle>

    <CardContainer>
      <SectionTitle>Game Name</SectionTitle>
      <p>Description of the game (mockup text).</p>
      <p class="mt-2 text-sm text-gray-300">
        Active teams: Team Alpha, Team Bravo, Team Charlie.
      </p>

      <div class="mt-4 flex gap-2">
        <AppButton @click="$router.push('/team')">
          Join Team
        </AppButton>
        <BackButton @click="$router.push('/games')" />
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
  name: "GameDetailPage",
  components: {
    PageTitle,
    SectionTitle,
    CardContainer,
    AppButton,
    BackButton,
  },
};
</script>
