<template>
  <!-- <section>
    <BaseCard
      ><h2>{{ makeFullName }}</h2>
      <h3>{{ rate }}$/h</h3>
    </BaseCard>
  </section>
  <section>
    <BaseCard>
      <header>
        <BaseButton link :to="contactLink">Contact</BaseButton>
      </header>
      <router-view></router-view>
    </BaseCard>
  </section>
  <section>
    <BaseCard>
      <p>{{ area }}</p>
    </BaseCard>
  </section>
  <section>
    <BaseCard>
      <p>{{ description }}</p>
    </BaseCard>
  </section> -->
  <div class="card">
    <img :src="makeimg" alt="John" style="width:100%" />
    <h1>John Doe</h1>
    <p class="title">CEO & Founder, Example</p>
    <p>Harvard University</p>
    <a href="#"><i class="fa fa-dribbble"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-facebook"></i></a>
    <p><button>Contact</button></p>
  </div>
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
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover,
a:hover {
  opacity: 0.7;
}
</style>
