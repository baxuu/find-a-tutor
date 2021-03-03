<template>
  <li>
    <h3>{{ makeFullName }}</h3>
    <h4>{{ rate }}€/h</h4>
    <div>
      <span>{{ area }}</span>
    </div>
    <div class="actions">
      <router-link :to="tutorContactLink">Contact</router-link>
      <router-link :to="tutorProfileLink">View Profile</router-link>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "firstName", "lastName", "rate", "area"],
  computed: {
    makeFullName() {
      return this.firstName + " " + this.lastName;
    },
    tutorContactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
    tutorProfileLink() {
      return this.$route.path + "/" + this.id + "/contact";
    }
  }
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
