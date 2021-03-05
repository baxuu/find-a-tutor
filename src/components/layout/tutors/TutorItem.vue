<template>
  <li>
    <h3>{{ makeFullName }}</h3>
    <img :src="img" alt="John" style="width:40%" />
    <h4 class="item-container">{{ rate }}€/h</h4>
    <div class="item-container">
      <span>{{ area }}</span>
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
  width: 30%;
  margin: 1rem 0;
  border: 1px solid #e24a3b;
  padding: 1rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 3rem auto;
}
img {
  display: block;
  margin: 0 auto;
  height: 200px;
  object-fit: contain;
}

h3 {
  font-size: 1.5rem;
  text-align: center;
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
  justify-content: center;
}
.item-container {
  width: 60%;
  background-color: #e24a3b;
  color: white;
  padding: 0.5rem 1.5rem;
  margin: 1rem auto 1rem auto;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.26);
}
</style>
