import { createStore } from "vuex";

import tutorsModules from "./modules/tutors/index";
import messagesModules from "./modules/messages/index";

const store = createStore({
  modules: { tutors: tutorsModules, messages: messagesModules },

  state() {
    return {
      userId: "elo"
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;
