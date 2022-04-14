<template>
  <q-card class="flex flex-center column lognsign-card q-my-md q-pa-xl">
    <h5 class="q-my-none">Inscription</h5>
    <div class="form-container q-mt-xl">
      <q-form @submit="onSubmit">
        <FormInput name="emailInput" label="Votre adresse mail" model="email" />
        <FormInput label="Votre mot de passe" model="password" />
        <FormInput label="Prenom" model="first_name" />
        <FormInput label="Nom" model="last_name" />

        <div>
          <q-btn label="s'inscrire" color="primary" @click="onSubmit" />
        </div>
      </q-form>
    </div>
  </q-card>
</template>

<script>
import FormInput from "../components/FormInput.vue";
import { api } from "src/boot/axios";

export default {
  name: "RegisterForm",

  components: {
    FormInput,
  },

  methods: {
    /*
    sendSubRequest() {
      api
        .post('http://localhost:3000/user', {
          email:
        })
    }
    */
    onSubmit(e) {
      console.log(e.target);
      /*
      const form = e.target;

      const formData = new FormData(form); // get all named inputs in form
      for (const [inputName, value] of formData) {
        console.log({ inputName, value });
      }
      */
    },
  },
};
</script>

<style lang="scss">
.lognsign-card {
  //width: 60%;
  height: fit-content;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
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
