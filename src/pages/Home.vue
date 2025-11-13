<template>
  <div class="p-6">
    <PageTitle>Home</PageTitle>

    <div class="flex flex-wrap gap-2 mb-6">
      <AppButton @click="$router.push('/profile')">Profile</AppButton>
      <AppButton @click="$router.push('/chat')">Messages</AppButton>
      <AppButton @click="$router.push('/notifications')">Notifications</AppButton>
      <AppButton @click="$router.push('/games')">Games</AppButton>
      <AppButton @click="$router.push('/leaderboard')">Leaderboard</AppButton>
      <AppButton @click="$router.push('/search')">Search</AppButton>
      <AppButton @click="$router.push('/settings')">Settings</AppButton>
    </div>

    <SectionTitle>Feed</SectionTitle>
    <CardContainer>
      <p class="text-sm text-gray-300">
        Here will appear posts from players (mockup).
      </p>
      <AppButton class="mt-3" @click="$router.push('/create-post')">
        Create Post
      </AppButton>
    </CardContainer>

    <SectionTitle>Recommended Games</SectionTitle>
    <CardContainer>
      <p class="text-sm text-gray-300">
        A list of recommended games (mockup).
      </p>
      <AppButton class="mt-3" @click="$router.push('/games')">
        Go to Games
      </AppButton>
    </CardContainer>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import SectionTitle from "../components/SectionTitle.vue";
import CardContainer from "../components/CardContainer.vue";
import AppButton from "../components/AppButton.vue";

export default {
  name: "Home",
  components: { PageTitle, SectionTitle, CardContainer, AppButton },
};
</script>

