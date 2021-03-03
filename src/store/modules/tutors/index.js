import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

import profile1 from "../../../assets/profile1.jpg";
import profile2 from "../../../assets/profile2.jpg";

export default {
  namespaced: true,
  state() {
    return {
      tutors: [
        {
          id: "665asdasd",
          firstName: "Danny",
          lastName: "Mergos",
          img: profile1,
          areas: "languages",
          description:
            "I am Danny and I worked for 10 years in a language school in Madagascar. I am fluent in English and German and can impart knowledge in an accessible manner",
          hourlyRate: 70
        },
        {
          id: "asdasd76867asd",
          firstName: "Rosalie",
          lastName: "Star",
          img: profile2,
          areas: "science",
          description:
            "I'm Rosalie and I've been passionate about science since I was young. I will prepare you for any exam in subjects such as physics, chemistry or mathematics. ",
          hourlyRate: 100
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
