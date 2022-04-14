<template>
  <q-card class="flex flex-center column lognsign-card q-my-md q-pa-xl">
    <h5 class="q-my-none">Connexion</h5>
    <div class="form-container q-mt-xl">
      <q-form @submit="onSubmit">
        <FormInput label="Votre adresse mail" model="email" />
        <FormInput label="Votre mot de passe" model="password" />

        <div>
          <q-btn label="connexion" color="primary" />
        </div>
      </q-form>
    </div>
  </q-card>
</template>

<script>
import { useCounterStore } from "../pinia/counter.js";
import FormInput from "../components/FormInput.vue";

export default {
  name: "LoginForm",

  components: {
    FormInput,
  },

  data() {
    const counter = useCounterStore();
    counter.counter++;
    return counter;
  },
};
</script>
