<template>
  <div class="p-6 max-w-md mx-auto">
    <PageTitle>Notifications</PageTitle>

    <ul class="space-y-2">
      <NotificationItem
        v-for="n in notifications"
        :key="n.id"
        :text="n.text"
        @mark-read="handleMarkRead(n)"
      />
    </ul>

    <BackButton class="mt-4" @click="$router.push('/home')" />
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import NotificationItem from "../components/NotificationItem.vue";
import BackButton from "../components/BackButton.vue";

export default {
  name: "Notifications",
  components: { PageTitle, NotificationItem, BackButton },
  data() {
    return {
      notifications: [
        { id: 1, text: "Game invite from Player1" },
        { id: 2, text: "You have a new message" },
      ],
    };
  },
  methods: {
    handleMarkRead(n) {
      console.log("Marked as read:", n.text);
    },
  },
};
</script>
