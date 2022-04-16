<template>
  <q-card>
    <h5>{{ userStore.getUserName }}</h5>
    <q-separator></q-separator>
    <q-input></q-input>
  </q-card>
</template>

<script>
import { useUserStore } from "src/pinia/user.store";

export default {
  name: "UserCard",

  data() {
    const userStore = useUserStore();
    var emailInput = "";
    var firstNameInput = "";
    var lastNameInput = "";
    var passwordInput = "";
    return {
      userStore,
      emailInput,
      firstNameInput,
      lastNameInput,
      passwordInput,
    };
  },
};
</script>
