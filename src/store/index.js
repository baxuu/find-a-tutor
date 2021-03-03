import { createStore } from "vuex";

import tutorsModules from "./modules/tutors/index";

const store = createStore({
  modules: { tutors: tutorsModules }
});

export default store;
