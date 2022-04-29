<template>
  <q-card class="flex column lognsign-card q-my-md q-pa-xl">
    <h5 class="q-my-none q-mb-md">Connexion</h5>
    <div class="form-container">
      <q-form @submit="onSubmit">
        <q-input
          class="q-mb-md"
          filled
          style="background-color: #ffffff; border-radius: 10px 10px 10px 10px"
          v-model="email"
          label="Votre adresse mail"
          type="email"
        />

        <q-input
          type="password"
          class="q-mb-md"
          v-model="password"
          filled
          style="background-color: #ffffff; border-radius: 10px 10px 10px 10px"
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
import { Notify, useQuasar } from "quasar";

export default {
  name: "LoginForm",

  components: {},

  data() {
    const $q = useQuasar();
    const userStore = useUserStore();
    return {
      $q,
      userStore,
      password: "",
      email: "",
    };
  },

  methods: {
    async onSubmit(e) {
      if (this.password.length === 0 || this.email.length === 0) {
        console.log("error email or password invalid"); // notif
        this.$q.notify({
          message: "Entrée(s) invalide(s)!",
          timeout: 2000,
          //position: center,
        });
        return;
      }
      if (await this.userStore.userLogin(this.email, this.password)) {
        this.$router.push({ path: "/" });
        this.$q.notify({
          message: "Bienvenue!",
          timeout: 2500,
          position: "top",
        });
      } else {
        console.log("cant connect"); // notif
        this.$q.notify({
          message: "Une erreur est survenue pendant la connexion.",
          timeout: 2500,
        });
      }
    },
  },
};
</script>
