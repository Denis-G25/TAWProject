<template>
  <div class="p-6 max-w-md mx-auto text-center">
    <PageTitle>404 - Page Not Found</PageTitle>

    <CardContainer>
      <p class="text-sm text-gray-300">
        The page you are looking for does not exist or has been moved.
      </p>
    </CardContainer>

    <div class="mt-4 flex justify-center">
      <AppButton @click="$router.push('/home')">
        Go Home
      </AppButton>
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import CardContainer from "../components/CardContainer.vue";
import AppButton from "../components/AppButton.vue";

export default {
  name: "Error404",
  components: { PageTitle, CardContainer, AppButton },
};
</script>

