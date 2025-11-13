<template>
  <div class="p-6 max-w-xl mx-auto">
    <PageTitle>Profile</PageTitle>

    <CardContainer>
      <SectionTitle>Basic Info</SectionTitle>
      <p>Username: Gamer123</p>
      <p>Bio: Competitive gamer and team player.</p>
    </CardContainer>

    <CardContainer>
      <SectionTitle>Games</SectionTitle>
      <p>Game 1, Game 2, Game 3 (mockup)</p>
      <div class="mt-3 flex gap-2">
        <AppButton @click="$router.push('/achievements')">
          View Achievements
        </AppButton>
        <AppButton @click="$router.push('/friends')">
          Friends List
        </AppButton>
      </div>
    </CardContainer>

    <div class="mt-4 flex gap-2">
      <AppButton @click="$router.push('/settings')">
        Edit Profile (Settings)
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
  name: "ProfilePage",
  components: {
    PageTitle,
    SectionTitle,
    CardContainer,
    AppButton,
    BackButton,
  },
};
</script>
