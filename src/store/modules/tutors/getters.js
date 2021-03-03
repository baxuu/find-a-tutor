export default {
  tutors(state) {
    return state.tutors;
  },
  areTutors(state) {
    return state.tutors && state.tutors.length > 0;
  }
};
