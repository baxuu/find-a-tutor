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
      <li v-for="tutor in filteredTutors" v-bind:key="tutor.id">
        {{ tutor.firstName }}
      </li>
    </ul>
    <h3 v-else>No tutors found! Please revert your filters!</h3>
  </section>
</template>

<script>
export default {
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
