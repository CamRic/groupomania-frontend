<template>
  <q-card class="q-pa-xl q-ma-md groupomania-qcard">
    <h5 class="q-mt-none">{{ userStore.getUserName }}</h5>
    <q-form @submit="onSubmit" style="min-width: 270px">
      <q-input
        class="q-mb-md groupomania-qinput"
        borderless
        filled
        stack-label
        v-model="emailInput"
        label="Email"
        :placeholder="userStore.getUserEmail"
        type="email"
      />
      <q-input
        class="q-mb-md groupomania-qinput"
        borderless
        filled
        stack-label
        v-model="firstNameInput"
        label="Prénom"
        :placeholder="userStore.getFirstName"
        type="text"
      />
      <q-input
        class="q-mb-md groupomania-qinput"
        borderless
        filled
        stack-label
        v-model="lastNameInput"
        label="Nom"
        :placeholder="userStore.getLastName"
        type="text"
      />
      <q-input
        class="q-mb-md groupomania-qinput"
        borderless
        filled
        stack-label
        v-model="passwordInput"
        label="Mot de passe"
        type="password"
      />
      <div class="flex justify-between">
        <q-btn label="modifier" type="submit" color="primary" />
        <q-btn
          label="supprimer"
          @click="deleteSelf"
          color="negative"
          class="q-ml-xl"
        />
      </div>
    </q-form>
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

  methods: {
    // onsubmit(e) {
    //   this.userStore.modifyUser()
    // }
    deleteSelf() {
      console.log("deleting");
      this.userStore
        .deleteUser()
        .then((res) => {
          this.userStore.disconnect;
          this.$router.replace("/login");
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
