export default {
  messages(state, _, _2, rootGetters) {
    const tutorId = rootGetters.userId;

    return state.messages.filter(msg => msg.tutorId === tutorId);
  },
  hasMessages(_, getters) {
    return getters.messages && getters.messages.length > 0;
  }
};
