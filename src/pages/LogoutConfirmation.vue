<template>
  <div class="p-6 max-w-md mx-auto">
    <PageTitle>Logout</PageTitle>

    <CardContainer>
      <p class="text-sm text-gray-300 mb-4">
        Are you sure you want to logout?
      </p>

      <div class="flex gap-2">
        <AppButton @click="$router.push('/login')">
          Confirm
        </AppButton>
        <BackButton @click="$router.push('/home')" />
      </div>
    </CardContainer>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import CardContainer from "../components/CardContainer.vue";
import AppButton from "../components/AppButton.vue";
import BackButton from "../components/BackButton.vue";

export default {
  name: "LogoutConfirmation",
  components: { PageTitle, CardContainer, AppButton, BackButton },
};
</script>

