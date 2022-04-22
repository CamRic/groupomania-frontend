<template>
  <q-header
    elevated
    class="q-px-xs flex row content-center groupomania-header"
    style="height: 100px; justify-content: center"
  >
    <q-toolbar style="justify-content: center; width: 80%; margin: auto">
      <q-img
        src="../assets/icon-left-font-monochrome-white.png"
        width="270px"
        height="100px"
        style="position: fixed"
        @click="this.$router.replace({ path: '/' })"
      />

      <ProfilNav
        class="q-ml-auto"
        v-show="userStore.isLogged"
        :UserName="userStore.getFirstName"
      />
    </q-toolbar>
  </q-header>
</template>

<script>
import ProfilNav from "../components/ProfilNav.vue";
import { useUserStore } from "src/pinia/user.store";

export default {
  name: "HeaderComponent",

  components: {
    ProfilNav,
  },

  data() {
    const userStore = useUserStore();
    return {
      userStore,
      showDrawer: true,
      currUrl: this.$route,
    };
  },

  computed() {
    return {
      changeDrawer(data) {
        this.showDrawer = !this.showDrawer;
      },
    };
  },

  methods: {
    emitLeftDrawerOpen(data) {
      console.log(this.currUrl.fullPath);
      this.$emit("showLeftDrawer", !this.showDrawer);
    },
  },
};
</script>
