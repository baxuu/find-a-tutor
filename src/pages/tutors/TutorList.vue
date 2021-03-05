<template>
  <section>
    filter
  </section>
  <section class="list-conteiner">
    <div class="controls">
      <BaseButton mode="outline">Refresh the tutors list</BaseButton>
      <BaseButton link to="/signup">Signup</BaseButton>
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
        :img="tutor.img"
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
.list-conteiner {
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
}
ul {
  display: flex;
  flex-flow: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
