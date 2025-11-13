<template>
  <div class="p-6 max-w-md mx-auto">
    <PageTitle>Sign Up</PageTitle>

    <TextInput v-model="username" placeholder="Username" />
    <TextInput v-model="email" placeholder="Email" />
    <TextInput v-model="password" type="password" placeholder="Password" />
    <TextInput
      v-model="confirmPassword"
      type="password"
      placeholder="Confirm Password"
    />

    <div class="flex gap-2 mt-4">
      <AppButton @click="$router.push('/login')">
        Create Account
      </AppButton>

      <AppButton @click="$router.push('/login')">
        Back to Login
      </AppButton>
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import TextInput from "../components/TextInput.vue";
import AppButton from "../components/AppButton.vue";

export default {
  name: "SignUp",
  components: { PageTitle, TextInput, AppButton },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
};
</script>
