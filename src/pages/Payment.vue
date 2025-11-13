<template>
  <div class="p-6 max-w-md mx-auto">
    <PageTitle>Payment / Premium</PageTitle>

    <CardContainer>
      <SectionTitle>Payment Details</SectionTitle>

      <TextInput v-model="cardNumber" placeholder="Card Number" />
      <TextInput v-model="cardName" placeholder="Name on Card" />
      <TextInput v-model="expiry" placeholder="MM/YY" />
      <TextInput v-model="cvv" placeholder="CVV" />

      <div class="mt-4 flex gap-2">
        <AppButton @click="$router.push('/home')">
          Pay
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
import TextInput from "../components/TextInput.vue";
import AppButton from "../components/AppButton.vue";
import BackButton from "../components/BackButton.vue";

export default {
  name: "Payment",
  components: {
    PageTitle,
    SectionTitle,
    CardContainer,
    TextInput,
    AppButton,
    BackButton,
  },
  data() {
    return {
      cardNumber: "",
      cardName: "",
      expiry: "",
      cvv: "",
    };
  },
};
</script>
