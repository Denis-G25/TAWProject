<template>
  <div class="p-6 max-w-xl mx-auto">
    <PageTitle>Team Page</PageTitle>

    <CardContainer>
      <SectionTitle>Team Info</SectionTitle>
      <p>Team Name: Team Alpha</p>
      <p>Members: Player1, Player2, Player3</p>
      <p>Score: 1230</p>
      <p>Matches: 25 played</p>

      <div class="mt-4 flex gap-2">
        <AppButton>
          Invite Player
        </AppButton>
        <AppButton>
          Leave Team
        </AppButton>
      </div>
    </CardContainer>

    <BackButton @click="$router.push('/games')" />
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import SectionTitle from "../components/SectionTitle.vue";
import CardContainer from "../components/CardContainer.vue";
import AppButton from "../components/AppButton.vue";
import BackButton from "../components/BackButton.vue";

export default {
  name: "TeamPage",
  components: {
    PageTitle,
    SectionTitle,
    CardContainer,
    AppButton,
    BackButton,
  },
};
</script>
