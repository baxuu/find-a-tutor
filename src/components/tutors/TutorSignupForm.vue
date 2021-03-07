<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" v-model.trim="firstName" />
    </div>
    <div class="form-control">
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" v-model.trim="lastName" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea id="description" rows="5" v-model.trim="description"></textarea>
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" v-model.number="rate" />
    </div>
    <div class="form-control">
      <label for="area">Choose a subject:</label>
      <select name="area" id="area" v-model="area">
        <option value="Business">Business</option>
        <option value="Languages">Languages</option>
        <option value="Mathematics">Mathematics</option>
        <option value="Sciences">Sciences</option>
        <option value="Technology">Technology</option>
        <option value="Communication">Communication</option>
      </select>
      <img :src="img" alt="John" style="width:40%" />
      <div class="form-control">
        <label for="avatar">Choose a profile picture:</label>
        <input
          type="file"
          id="img"
          name="img"
          accept="image/png, image/jpeg"
          @change="processFile($event)"
        />
      </div>
    </div>
    <BaseButton>Register</BaseButton>
  </form>
</template>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      firstName: "",
      lastName: "",
      description: "",
      rate: "",
      area: "",
      img: null
    };
  },
  methods: {
    processFile(event) {
      this.img = event.target.files[0];
    },
    submitForm() {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        description: this.description,
        rate: this.rate,
        area: this.area,
        img: this.img
      };

      console.log(formData);
    }
  }
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
