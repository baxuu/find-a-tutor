<template>
  <TutorFilter @change-filter="setFilter" />
  <section class="list-conteiner">
    <div class="controls">
      <BaseButton mode="outline">Refresh the tutors list</BaseButton>
      <BaseButton v-if="!isTutor" link to="/signup">Signup</BaseButton>
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
import TutorFilter from "../../components/tutors/TutorFilter.vue";
import TutorItem from "../../components/tutors/TutorItem.vue";

export default {
  components: { TutorItem, TutorFilter },
  data() {
    return {
      selectedFilter: ""
    };
  },
  computed: {
    isTutor() {
      return this.$store.getters["tutors/isTutor"];
    },
    filteredTutors() {
      const tutors = this.$store.getters["tutors/tutors"];
      return !this.selectedFilter || this.selectedFilter === "All"
        ? tutors
        : tutors.filter(
            tutor => this.selectedFilter && tutor.area === this.selectedFilter
          );
    },
    areTutors() {
      return this.$store.getters["tutors/areTutors"];
    }
  },
  methods: {
    setFilter(updatedFilter) {
      this.selectedFilter = updatedFilter;

      return this.selectedFilter;
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
