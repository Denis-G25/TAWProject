<script>
import PageTitle from "../components/PageTitle.vue";
import GameCard from "../components/GameCard.vue";
import BackButton from "../components/BackButton.vue";

export default {
  name: "GamePage",
  components: { PageTitle, GameCard, BackButton },
  data() {
    return {
      games: [
        { id: 1, name: "Game 1", players: 5 },
        { id: 2, name: "Game 2", players: 3 },
      ],
    };
  },
  methods: {
    goToDetails(game) {
      this.$router.push("/game-detail");
    },
    goToTeam(game) {
      this.$router.push("/team");
    },
    goToCreateTeam(game) {
      this.$router.push("/create-team");
    },
  },
};
</script>
