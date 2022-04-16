<template>
  <q-card class="flex flex-center column lognsign-card q-my-md q-pa-xl">
    <h5 class="q-my-none">Connexion</h5>
    <div class="form-container q-mt-xl">
      <q-form @submit="onSubmit">
        <q-input
          class="q-mb-md"
          filled
          style="background-color: #ffdede; border-radius: 10px 10px 10px 10px"
          v-model="email"
          label="Votre adresse mail"
          type="email"
        />

        <q-input
          type="password"
          class="q-mb-md"
          v-model="password"
          filled
          style="background-color: #ffdede; border-radius: 10px 10px 10px 10px"
          label="Votre mot de passe"
        />

        <div>
          <q-btn label="connexion" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-card>
</template>

<script>
import { useUserStore } from "src/pinia/user.store.js";

export default {
  name: "LoginForm",

  components: {},

  data() {
    const userStore = useUserStore();
    return {
      userStore,
      password: "",
      email: "",
    };
  },

  methods: {
    async onSubmit(e) {
      if (this.password.length === 0 || this.email.length === 0) {
        console.log("error email or password invalid");
        return;
      }
      if (await this.userStore.userLogin(this.email, this.password)) {
        this.$router.push({ path: "/" });
      } else {
        console.log("cant connect");
      }
    },
  },
};
</script>
