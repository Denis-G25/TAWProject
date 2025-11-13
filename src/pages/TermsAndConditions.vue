<template>
  <div class="p-6 max-w-2xl mx-auto">
    <PageTitle>Terms &amp; Conditions</PageTitle>

    <CardContainer>
      <SectionTitle>Usage</SectionTitle>
      <p class="text-sm text-gray-300 mb-2">
        This platform is a mockup for a gamer social network. All data is demo only.
      </p>

      <SectionTitle>Privacy</SectionTitle>
      <p class="text-sm text-gray-300 mb-2">
        User information shown here is fictional and used only for educational purposes.
      </p>

      <SectionTitle>Liability</SectionTitle>
      <p class="text-sm text-gray-300 mb-2">
        There is no real online service behind this prototype. It is meant for a university project.
      </p>
    </CardContainer>

    <BackButton @click="$router.push('/home')" />
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import SectionTitle from "../components/SectionTitle.vue";
import CardContainer from "../components/CardContainer.vue";
import BackButton from "../components/BackButton.vue";

export default {
  name: "TermsAndConditions",
  components: { PageTitle, SectionTitle, CardContainer, BackButton },
};
</script>
