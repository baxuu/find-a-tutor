<template>
  <section class="signup-tutor">
    <h2>Register as a tutor now!</h2>
    <TutorSignupForm @save-data="saveData"></TutorSignupForm>
  </section>
</template>

<script>
import TutorSignupForm from "../../components/tutors/TutorSignupForm";

export default {
  components: {
    TutorSignupForm
  }
};
</script>

<style scoped>
.signup-tutor {
  width: 30%;
  margin: 1rem 0;
  border: 1px solid #e24a3b;
  padding: 1rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 3rem auto;
}
</style>
