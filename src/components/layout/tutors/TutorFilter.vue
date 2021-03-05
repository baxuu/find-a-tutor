<template>
  <section>
    <h2>Find Your Tutor</h2>
    <div class="search-container">
      <label for="area">Choose a subject:</label>
      <select name="area" id="area" v-model="selected" @input="changeFilter()">
        <option value="All">All</option>
        <option value="Business">Business</option>
        <option value="Languages">Languages</option>
        <option value="Mathematics">Mathematics</option>
        <option value="Sciences">Sciences</option>
        <option value="Technology">Technology</option>
        <option value="Communication">Communication</option>
      </select>
    </div>
  </section>
  <!-- <span>Selected: {{ selected }}</span> -->
</template>

<script>
export default {
  emits: ["change-filter"],
  data() {
    return {
      selected: "All"
    };
  },
  methods: {
    changeFilter() {
      this.$emit("change-filter", this.selected);
    }
  }
};
</script>

<style scoped>
section {
  width: 40%;
  margin: 1rem 0;
  border: 1px solid #e24a3b;
  padding: 1rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 3rem auto;
  color: #e24a3b;
}

.search-container {
  text-align: center;
}
select {
  margin-left: 1rem;
  color: #e24a3b;
  border: 1px solid #e24a3b;
}

h2 {
  text-align: center;
}
</style>
