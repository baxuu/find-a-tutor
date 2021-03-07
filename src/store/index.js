import { createStore } from "vuex";

import tutorsModules from "./modules/tutors/index";

const store = createStore({
  modules: { tutors: tutorsModules },

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
