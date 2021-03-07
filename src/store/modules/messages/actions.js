export default {
  contactTutor(context, payload) {
    const newMessage = {
      id: new Date().toISOString(),
      ...payload
    };
    context.commit("contactTutor", newMessage);
  }
};
