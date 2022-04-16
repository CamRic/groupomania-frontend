<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { useUserStore } from "./pinia/user.store";

export default defineComponent({
  name: "App",

  data() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },
});
</script>

<style lang="scss">
a {
  color: #000;
}
</style>
