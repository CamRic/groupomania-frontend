import { defineStore } from "pinia";
import { api } from "src/boot/axios";
import { Cookies, Notify } from "quasar";

export const useUserStore = defineStore("user_store", {
  state: () => ({
    loggedIn: false,
    user_email: "",
    user_id: "",
    user_first_name: "",
    user_last_name: "",
    user_access_level: "",
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
      console.log(response);
      var d = new Date();
      d.setTime(d.getTime() + 60 * 60 * 1000);
      document.cookie =
        "token=" + response.data.token + ";expires=" + d.toUTCString();
      document.cookie =
        "user_role=" + response.data.user_role + ";expires=" + d.toUTCString();
      this.loggedIn = true;
      this.user_email = response.data.user_email;
      this.user_id = response.data.user_id;
      this.user_first_name = response.data.user_firstName;
      this.user_last_name = response.data.user_lastName;
      this.user_access_level = response.data.user_role;
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
          console.log(res);
          console.log(response);
          this.loggedIn = true;
          this.user_email = response.data.user_email;
          this.user_id = response.data.user_id;
          this.user_first_name = response.data.user_firstName;
          this.user_last_name = response.data.user_lastName;
          this.user_access_level = res.data.user_role;
        })
        .catch((err) => console.log(err));
    },
    disconnect() {
      this.loggedIn = false;
      this.user_email = "";
      this.user_id = "";
      this.user_first_name = "";
      this.user_last_name = "";
      this.user_access_level = "";
    },
    async deleteUser(data) {
      await api
        .delete("/post/user/" + this.user_id, {
          headers: { Authorization: "Bearer: " + Cookies.get("token") },
        })
        .then((res) => {
          console.log(res);
          console.log("users post deleted");
          api
            .delete("/topic/user/" + this.user_id, {
              headers: { Authorization: "Bearer: " + Cookies.get("token") },
            })
            .then((res2) => {
              console.log(res2);
              console.log("user topics deleted");
              api
                .delete("http://localhost:3000/api/user/" + this.user_id, {
                  headers: { Authorization: "Bearer: " + Cookies.get("token") },
                })
                .then((row) => {
                  // Notify.create({
                  //   message: "Compte Supprimé!",
                  //   timeout: 2500,
                  // });
                  console.log("user deleted " + row);
                })
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
      console.log("finished deleting user data");
      this.loggedIn = false;
    },
    async resetData(data) {
      api
        .get("/user/" + this.user_id, {
          headers: { Authorization: "Bearer: " + Cookies.get("token") },
        })
        .then((user) => {
          this.user_email = user.data.user.email;
          this.user_first_name = user.data.user.first_name;
          this.user_last_name = user.data.user.last_name;
          this.user_access_level = response.data.user_role;
        })
        .catch((err) => console.log(err));
    },
  },
});
