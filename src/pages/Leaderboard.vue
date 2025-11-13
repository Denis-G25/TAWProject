<template>
  <div class="p-6 max-w-md mx-auto">
    <PageTitle>Leaderboard</PageTitle>

    <CardContainer>
      <ol class="list-decimal list-inside space-y-1">
        <li>Player 1 – 500 pts</li>
        <li>Player 2 – 450 pts</li>
        <li>Player 3 – 400 pts</li>
      </ol>
    </CardContainer>

    <BackButton @click="$router.push('/home')" />
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import CardContainer from "../components/CardContainer.vue";
import BackButton from "../components/BackButton.vue";

export default {
  name: "Leaderboard",
  components: { PageTitle, CardContainer, BackButton },
};
</script>

