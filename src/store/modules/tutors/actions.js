export default {
  signupTutor(context, data) {
    const tutorData = { id: context.rootGetters.userId, ...data };
    context.commit("signupTutor", tutorData);
  }
};
