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
.groupomania-header {
  background-color: $groupomania1;
}
.groupomania-qpage {
  background-color: $groupomania2;
  opacity: 0.9;
}
.groupomania-qcard {
  background-color: $groupomania3;
}
.groupomania-qinput {
  background-color: $groupomania2;
  border-radius: 10px 10px 10px 10px;
}
</style>
