<template>
  <q-header
    elevated
    class="q-px-xs"
    style="height: 100px; justify-content: center"
  >
    <q-toolbar style="justify-content: space-between; width: 80%; margin: auto">
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="emitLeftDrawerOpen"
      />
      <q-img
        src="../assets/icon-left-font-monochrome-black.png"
        width="200px"
        height="100px"
      />

      <ProfilNav />
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
      this.$emit("showLeftDrawer", !this.showDrawer);
    },
  },
};
</script>
