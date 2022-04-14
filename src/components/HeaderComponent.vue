<template>
  <q-header
    elevated
    class="q-px-xs flex row content-center"
    style="height: 100px; justify-content: center; background-color: #ba4e55"
  >
    <q-toolbar style="justify-content: center; width: 80%; margin: auto">
      <q-btn
        class="q-mr-auto"
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="emitLeftDrawerOpen"
      />
      <q-img
        src="../assets/icon-left-font-monochrome-white.png"
        width="270px"
        height="100px"
        style="position: fixed"
      />

      <ProfilNav class="q-ml-auto" />
    </q-toolbar>
  </q-header>
</template>

<script>
import ProfilNav from "../components/ProfilNav.vue";

export default {
  name: "HeaderComponent",

  components: {
    ProfilNav,
  },

  data() {
    return {
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
