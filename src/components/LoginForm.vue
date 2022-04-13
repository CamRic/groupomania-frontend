<template>
  <div class="self-center items-center" style="width: inherit">
    <h5>Connexion</h5>
    <q-form @submit="onSubmit">
      <q-input
        filled
        v-model="email"
        label="Adresse email"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Entrée non valide']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Mot de passe"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Entrée non valide']"
      />

      <a href="#">S'inscire</a>

      <div>
        <q-btn label="connexion" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useCounterStore } from "../pinia/counter.js";

export default {
  name: "LoginForm",

  data() {
    const counter = useCounterStore();
    counter.counter++;
    return counter;
  },
};
</script>
