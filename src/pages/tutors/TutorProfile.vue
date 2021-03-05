<template>
  <section>
    <h3>{{ makeFullName }}</h3>
    <img :src="makeimg" alt="John" style="width:40%" />
    <h4 class="item-container">{{ rate }}€/h</h4>
    <div class="item-container">
      <span>{{ area }}</span>
    </div>
    <div class="container-description">
      <span>{{ description }}</span>
    </div>
    <div class="actions">
      <BaseButton mode="outline" link :to="tutorContactLink"
        >Contact</BaseButton
      >
    </div>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedTutor: null
    };
  },
  computed: {
    makeFullName() {
      return this.selectedTutor.firstName + " " + this.selectedTutor.lastName;
    },
    makeimg() {
      return this.selectedTutor.img;
    },
    tutorContactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
    area() {
      return this.selectedTutor.area;
    },
    rate() {
      return this.selectedTutor.hourlyRate;
    },
    description() {
      return this.selectedTutor.description;
    }
  },
  created() {
    this.selectedTutor = this.$store.getters["tutors/tutors"].find(
      tutor => tutor.id === this.id
    );
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
}
img {
  display: block;
  margin: 0 auto;
  height: 400px;
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
  width: 50%;
  background-color: #e24a3b;
  color: white;
  padding: 0.5rem 1.5rem;
  margin: 1rem auto 1rem auto;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.26);
}

.container-description {
  width: 89%;
  background-color: #e24a3b;
  color: white;
  padding: 0.5rem 1.5rem;
  margin: 1rem auto 1rem auto;
  text-align: justify;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.26);
}
</style>
