export default {
  signupTutor(context, data) {
    const tutorData = { id: "asdasdasd", ...data };
    context.commit("signupTutor", tutorData);
  }
};
