<template>
  <q-card class="flex flex-center column lognsign-card q-my-md q-pa-xl">
    <h5 class="q-my-none">Inscription</h5>
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

        <q-input
          type="text"
          class="q-mb-md"
          v-model="first_name"
          filled
          style="background-color: #ffdede; border-radius: 10px 10px 10px 10px"
          label="Votre prénom"
        />

        <q-input
          type="text"
          class="q-mb-md"
          v-model="last_name"
          filled
          style="background-color: #ffdede; border-radius: 10px 10px 10px 10px"
          label="Votre nom"
        />

        <div>
          <q-btn label="s'inscrire" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-card>
</template>

<script>
import { api } from "src/boot/axios";
export default {
  name: "RegisterForm",

  components: {},

  data() {
    return {
      password: "",
      email: "",
      first_name: "",
      last_name: "",
    };
  },

  methods: {
    onSubmit(e) {
      // check user input
      if (this.email.length < 6) {
        console.log("invalid email");
        return;
      }
      if (this.password.length < 4) {
        console.log("invalid password");
        return;
      }
      if (this.first_name.length < 2) {
        console.log("invalid name");
        return;
      }
      if (this.last_name.length < 1) {
        console.log("invalid name");
        return;
      }
      // send request
      api
        .post("http://localhost:3000/user/signup", {
          email: this.email,
          password: this.password,
          first_name: this.first_name,
          last_name: this.last_name,
        })
        .then((res) => {
          console.log(res);
          this.$emit("switchForm");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss">
.lognsign-card {
  //width: 60%;
  height: fit-content;
  background-color: $groupomania1;
  justify-content: center;
}
.form-container {
  max-width: 600px;
  min-width: 400px;
  height: auto;
  background-color: $groupomania1;
  > * {
    background-color: $groupomania1;
  }
}
</style>
