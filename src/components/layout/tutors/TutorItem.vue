<template>
  <li>
    <h3>{{ makeFullName }}</h3>
    <img :src="img" alt="John" style="width:30%" />
    <h4>{{ rate }}€/h</h4>
    <div>
      <span class="area">{{ area }}</span>
    </div>
    <div class="actions">
      <BaseButton mode="outline" link :to="tutorContactLink"
        >Contact</BaseButton
      >
      <BaseButton link :to="tutorProfileLink">View Profile</BaseButton>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "firstName", "lastName", "rate", "area", "img"],
  computed: {
    makeFullName() {
      return this.firstName + " " + this.lastName;
    },
    tutorContactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
    tutorProfileLink() {
      return this.$route.path + "/" + this.id;
    }
  }
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #e24a3b;

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

.area {
  background-color: #e24a3b;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}
</style>
