<template>
  <div class="p-6 max-w-md mx-auto">
    <PageTitle>Achievements / Badges</PageTitle>

    <CardContainer>
      <ul class="space-y-1 text-sm">
        <li>First Win</li>
        <li>Top 10 Player</li>
        <li>100 Matches Played</li>
        <li>Team Leader</li>
      </ul>
    </CardContainer>

    <BackButton @click="$router.push('/profile')" />
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import CardContainer from "../components/CardContainer.vue";
import BackButton from "../components/BackButton.vue";

export default {
  name: "Achievements",
  components: { PageTitle, CardContainer, BackButton },
};
</script>

