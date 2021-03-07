<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstname">First name</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="firstName.val"
        @blur="clearVal('firstName')"
      />
      <p v-if="!firstName.isValid">First name cannot be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastname">Last name</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="lastName.val"
        @blur="clearVal('lastName')"
      />
      <p v-if="!lastName.isValid">Last name cannot be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearVal('description')"
      ></textarea>
      <p v-if="!description.isValid">Description cannot be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        id="rate"
        v-model.number="rate.val"
        @blur="clearVal('rate')"
      />
      <p v-if="!rate.isValid">Hourly rate cannot be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !area.isValid }">
      <label for="area">Choose a subject:</label>
      <select name="area" id="area" v-model="area.val" @blur="clearVal('area')">
        <option value="Business">Business</option>
        <option value="Languages">Languages</option>
        <option value="Mathematics">Mathematics</option>
        <option value="Sciences">Sciences</option>
        <option value="Technology">Technology</option>
        <option value="Communication">Communication</option>
      </select>
      <p v-if="!area.isValid">Chooose a subject!</p>
    </div>
    <div class="form-control" :class="{ invalid: !img.isValid }">
      <label for="img">Choose a profile picture:</label>
      <input
        type="file"
        id="img"
        name="img"
        accept="image/png, image/jpeg"
        @change="processFile($event)"
        @blur="clearVal('img')"
      />
      <p v-if="!img.isValid">Chooose your profile picture!</p>
    </div>
    <p v-if="!formIsValid">Please fix the errors and submit again.</p>
    <BaseButton>Register</BaseButton>
  </form>
</template>

<script>
export default {
  emits: ["saveTutor"],
  data() {
    return {
      firstName: {
        val: "",
        isValid: true
      },
      lastName: {
        val: "",
        isValid: true
      },
      description: {
        val: "",
        isValid: true
      },
      rate: {
        val: null,
        isValid: true
      },
      area: {
        val: "",
        isValid: true
      },
      img: {
        val: "",
        isValid: true
      },
      formIsValid: true
    };
  },
  methods: {
    clearVal(input) {
      this[input].isValid = true;
    },

    validate() {
      this.formIsValid = true;
      if (this.firstName.val === "") {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === "") {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === "") {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.area.val === "") {
        this.area.isValid = false;
        this.formIsValid = false;
      }
      if (this.img.val === "") {
        this.img.isValid = false;
        this.formIsValid = false;
      }
    },
    processFile(event) {
      this.img.val = event.target.files[0];
    },
    submitForm() {
      this.validate();
      if (!this.formIsValid) {
        return;
      }
      const formData = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        img: this.img.val,
        area: this.area.val,
        description: this.description.val,
        hourlyRate: this.rate.val
      };
      this.$emit("saveTutor", formData);
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
