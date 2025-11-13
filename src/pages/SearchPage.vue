<template>
  <div class="p-6 max-w-md mx-auto">
    <PageTitle>Search</PageTitle>

    <TextInput v-model="query" placeholder="Search..." />

    <div class="flex gap-2 mt-2">
      <AppButton>
        Search
      </AppButton>
      <BackButton @click="$router.push('/home')" />
    </div>

    <CardContainer v-if="query">
      <SectionTitle>Results</SectionTitle>
      <p class="text-sm text-gray-300">
        Results for "{{ query }}" (mockup).
      </p>
    </CardContainer>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import TextInput from "../components/TextInput.vue";
import AppButton from "../components/AppButton.vue";
import BackButton from "../components/BackButton.vue";
import SectionTitle from "../components/SectionTitle.vue";
import CardContainer from "../components/CardContainer.vue";

export default {
  name: "SearchPage",
  components: {
    PageTitle,
    TextInput,
    AppButton,
    BackButton,
    SectionTitle,
    CardContainer,
  },
  data() {
    return {
      query: "",
    };
  },
};
</script>
