<template>
  <q-layout view="hHh lpr lFf">
    <HeaderComponent @showLeftDrawer="toggleLeftDrawer" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import HeaderComponent from "components/HeaderComponent.vue";

export default {
  name: "MainLayout",

  components: {
    HeaderComponent,
  },

  data() {
    return {
      leftDrawerOpen: true,
    };
  },

  methods: {
    toggleLeftDrawer(data) {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },
};
</script>
