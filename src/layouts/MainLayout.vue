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
    },
  },

  mounted() {
    console.log(this.userStore.loggedIn);
  },
};
</script>
