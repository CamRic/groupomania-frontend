import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useUserStore = defineStore("user_store", {
  state: () => ({
    loggedIn: false,
    user_email: "",
    user_id: "",
    user_first_name: "",
    user_last_name: "",
    user_access_level: "user",
  }),

  getters: {
    getUserId(state) {
      return state.user_id;
    },
    getUserEmail(state) {
      return state.user_email;
    },
    getFirstName(state) {
      return state.user_first_name;
    },
    getUserName(state) {
      return state.user_first_name + " " + state.user_last_name;
    },
    getLastName(state) {
      return state.user_last_name;
    },
    isLogged(state) {
      return state.loggedIn;
    },
  },

  actions: {
    async userLogin(inEmail, inPassword) {
      const response = await api.post("http://localhost:3000/user/login", {
        email: inEmail,
        password: inPassword,
      });
      console.log(response);
      var d = new Date();
      d.setTime(d.getTime() + 60 * 60 * 1000);
      document.cookie =
        "token=" + response.data.token + ";expires=" + d.toUTCString();
      this.loggedIn = true;
      this.user_email = response.data.user_email;
      this.user_id = response.data.user_id;
      this.user_first_name = response.data.user_firstName;
      this.user_last_name = response.data.user_lastName;
      return response;
    },
    disconnect() {
      localStorage.removeItem("token");
      this.loggedIn = false;
      this.user_email = "";
      this.user_id = "";
      this.user_first_name = "";
      this.user_last_name = "";
    },
  },
});
