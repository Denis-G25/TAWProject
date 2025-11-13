<template>
  <div class="p-6 max-w-md mx-auto">
    <PageTitle>Settings</PageTitle>

    <CardContainer>
      <SectionTitle>Preferences</SectionTitle>

      <label class="flex items-center gap-2 mb-2">
        <input type="checkbox" />
        <span>Enable notifications</span>
      </label>

      <label class="flex items-center gap-2 mb-2">
        <input type="checkbox" />
        <span>Private account</span>
      </label>

      <div class="mt-4 flex gap-2">
        <AppButton>
          Save
        </AppButton>
        <BackButton @click="$router.push('/home')" />
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
  name: "Settings",
  components: {
    PageTitle,
    SectionTitle,
    CardContainer,
    AppButton,
    BackButton,
  },
};
</script>
