import { defineStore } from "pinia";
import { api } from "src/boot/axios";
import { Cookies } from "quasar";

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
    getUseRole(state) {
      return state.user_access_level;
    },
  },

  actions: {
    async userLogin(inEmail, inPassword) {
      const response = await api.post("http://localhost:3000/api/user/login", {
        email: inEmail,
        password: inPassword,
      });
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
    retrieveConnection() {
      api({
        method: "post",
        url: "http://localhost:3000/api/user/retrieve",
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      })
        .then((res) => {
          this.loggedIn = true;
          this.user_email = response.data.user_email;
          this.user_id = response.data.user_id;
          this.user_first_name = response.data.user_firstName;
          this.user_last_name = response.data.user_lastName;
        })
        .catch((err) => console.log(err));
    },
    disconnect() {
      this.loggedIn = false;
      this.user_email = "";
      this.user_id = "";
      this.user_first_name = "";
      this.user_last_name = "";
    },
    async deleteUser(data) {
      console.log("sending request...");
      console.log(this.user_id);
      api
        .delete("http://localhost:3000/api/user/" + this.user_id, {
          headers: { Authorization: "Bearer: " + Cookies.get("token") },
        })
        .then((row) => console.log("user deleted " + row))
        .catch((err) => console.log(err));
    },
    async resetData(data) {
      api
        .get("/user/" + this.user_id)
        .then((user) => {
          this.user_email = user.data.user.email;
          this.user_first_name = user.data.user.first_name;
          this.user_last_name = user.data.user.last_name;
        })
        .catch((err) => console.log(err));
    },
  },
});
