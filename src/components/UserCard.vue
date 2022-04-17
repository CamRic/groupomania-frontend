<template>
  <q-card class="q-pa-xl q-ma-xl">
    <h5 class="q-mt-none">{{ userStore.getUserName }}</h5>
    <q-form @submit="onSubmit" style="min-width: 270px">
      <q-input
        class="q-mb-md"
        borderless
        filled
        stack-label
        v-model="emailInput"
        label="Email"
        :placeholder="userStore.getUserEmail"
        type="email"
      />
      <q-input
        class="q-mb-md"
        stack-label
        style="background-color: #ffdede; border-radius: 10px 10px 10px 10px"
        v-model="firstNameInput"
        label="Prénom"
        :placeholder="userStore.getFirstName"
        type="text"
      />
      <q-input
        class="q-mb-md"
        filled
        stack-label
        style="background-color: #ffdede; border-radius: 10px 10px 10px 10px"
        v-model="lastNameInput"
        label="Nom"
        :placeholder="userStore.getLastName"
        type="text"
      />
      <q-input
        class="q-mb-md"
        filled
        stack-label
        style="background-color: #ffdede; border-radius: 10px 10px 10px 10px"
        v-model="passwordInput"
        label="Mot de passe"
        type="password"
      />
      <div>
        <q-btn label="modifier" type="submit" color="primary" />
        <q-btn label="supprimer" color="negative" class="q-ml-xl" />
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
};
</script>
