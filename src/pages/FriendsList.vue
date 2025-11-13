<template>
  <div class="p-6 max-w-md mx-auto">
    <PageTitle>Friends List</PageTitle>

    <CardContainer>
      <ul class="space-y-2">
        <li
          v-for="f in friends"
          :key="f.id"
          class="flex justify-between items-center"
        >
          <span>{{ f.name }}</span>
          <div class="flex gap-2">
            <button class="border px-2 py-1 text-xs">
              Invite
            </button>
            <button class="border px-2 py-1 text-xs">
              Remove
            </button>
          </div>
        </li>
      </ul>
    </CardContainer>

    <BackButton @click="$router.push('/profile')" />
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import CardContainer from "../components/CardContainer.vue";
import BackButton from "../components/BackButton.vue";

export default {
  name: "FriendsList",
  components: { PageTitle, CardContainer, BackButton },
  data() {
    return {
      friends: [
        { id: 1, name: "Friend 1" },
        { id: 2, name: "Friend 2" },
        { id: 3, name: "Friend 3" },
      ],
    };
  },
};
</script>

