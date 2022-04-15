<template>
  <q-layout view="hHh lpr lFf">
    <HeaderComponent @showLeftDrawer="toggleLeftDrawer" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useUserStore } from "../pinia/user.store.js";
import HeaderComponent from "components/HeaderComponent.vue";
import { api } from "src/boot/axios";

export default {
  name: "MainLayout",

  components: {
    HeaderComponent,
  },

  data() {
    var userStore = useUserStore();
    return {
      userStore,
      leftDrawerOpen: true,
    };
  },

  methods: {
    toggleLeftDrawer(data) {
      this.leftDrawerOpen = !this.leftDrawerOpen;
      if (!localStorage.getItem("token")) {
        console.log("error: no auth token");
        return;
      }
      var token = "Bearer " + localStorage.getItem("token");
      api
        .get(
          "http://localhost:3000/user/38ec13aa-b68a-4bf8-add0-8f308efd2360",
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  },

  mounted() {
    console.log(this.userStore.loggedIn);
  },
};
</script>
