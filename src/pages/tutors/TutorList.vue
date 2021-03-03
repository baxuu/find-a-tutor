<template>
  <section>
    filter
  </section>
  <section>
    <div class="controls">
      <button>Refresh the tutors list</button>
      <router-link to="/signup">Signup and become a tutor!</router-link>
    </div>
    <ul v-if="areTutors">
      <TutorItem
        v-for="tutor in filteredTutors"
        :key="tutor.id"
        :id="tutor.id"
        :first-name="tutor.firstName"
        :lastName="tutor.lastName"
        :rate="tutor.hourlyRate"
        :area="tutor.area"
      />
    </ul>
    <h3 v-else>No tutors found! Please revert your filters!</h3>
  </section>
</template>

<script>
import TutorItem from "../../components/layout/tutors/TutorItem.vue";

export default {
  components: { TutorItem },
  computed: {
    filteredTutors() {
      return this.$store.getters["tutors/tutors"];
    },
    areTutors() {
      return this.$store.getters["tutors/areTutors"];
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
