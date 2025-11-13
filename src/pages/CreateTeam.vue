<template>
  <div class="p-6 max-w-md mx-auto">
    <PageTitle>Create Team</PageTitle>

    <TextInput v-model="teamName" placeholder="Team Name" />
    <TextInput v-model="teamDescription" placeholder="Team Description" />

    <div class="mt-4 flex gap-2">
      <AppButton @click="$router.push('/team')">
        Create
      </AppButton>
      <BackButton @click="$router.push('/games')" />
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import TextInput from "../components/TextInput.vue";
import AppButton from "../components/AppButton.vue";
import BackButton from "../components/BackButton.vue";

export default {
  name: "CreateTeam",
  components: { PageTitle, TextInput, AppButton, BackButton },
  data() {
    return {
      teamName: "",
      teamDescription: "",
    };
  },
};
</script>
