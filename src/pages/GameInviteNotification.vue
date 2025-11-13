<<template>
  <div class="p-6 max-w-md mx-auto">
    <PageTitle>Game Invite</PageTitle>

    <CardContainer>
      <SectionTitle>New Game Invite</SectionTitle>
      <p class="text-sm text-gray-300 mb-4">
        You have been invited to join a team in Game 1.
      </p>

      <div class="flex gap-2">
        <AppButton @click="$router.push('/team')">
          Accept
        </AppButton>
        <BackButton @click="$router.push('/notifications')" />
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
  name: "GameInviteNotification",
  components: {
    PageTitle,
    SectionTitle,
    CardContainer,
    AppButton,
    BackButton,
  },
};
</script>

