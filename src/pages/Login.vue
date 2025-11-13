<template>
  <div class="p-6 max-w-md mx-auto">
    <PageTitle>Login</PageTitle>

    <TextInput v-model="email" placeholder="Email" />
    <TextInput v-model="password" type="password" placeholder="Password" />

    <div class="flex flex-wrap gap-2 mt-2">
      <AppButton @click="$router.push('/home')">
        Login
      </AppButton>

      <AppButton @click="$router.push('/signup')">
        Sign Up
      </AppButton>

      <AppButton @click="$router.push('/forgot-password')">
        Forgot Password
      </AppButton>
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import TextInput from "../components/TextInput.vue";
import AppButton from "../components/AppButton.vue";

export default {
  name: "Login",
  components: { PageTitle, TextInput, AppButton },
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>
