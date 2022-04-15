import { defineStore } from "pinia";

export const useUserStore = defineStore("user_store", {
  state: () => ({
    loggedIn: false,
    user_id: "",
    user_first_name: "",
    user_last_name: "",
  }),

  getters: {
    getUserId(state) {
      return state.user_id;
    },
    getUserName(state) {
      return state.user_first_name + " " + state.user_last_name;
    },
    isLogged(state) {
      return state.loggedIn;
    },
  },

  setters: {
    setUserId(state, id) {
      state.user_id = id;
    },
    setUserFirstName(state, name) {
      state.user_first_name = name;
    },
    setUserLastName(state, name) {
      state.user_last_name = name;
    },
  },
});
