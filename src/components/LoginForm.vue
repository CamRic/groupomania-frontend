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
import { useCounterStore } from "../pinia/counter.js";
import { useUserStore } from "src/pinia/user.store.js";
import { api } from "src/boot/axios";

export default {
  name: "LoginForm",

  components: {},

  data() {
    const counter = useCounterStore();
    const userStore = useUserStore();
    counter.counter++;
    return {
      counter,
      userStore,
      password: "",
      email: "",
    };
  },

  methods: {
    onSubmit(e) {
      api
        .post("http://localhost:3000/user/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          console.log(localStorage.getItem("token"));
          this.userStore.user_id = res.data.user_id;
          console.log(this.userStore.getUserId);
          this.$router.push({ path: "/" });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
