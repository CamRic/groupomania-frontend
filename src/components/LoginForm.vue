<template>
  <div class="q-pa-md">
    <h3>Connexion</h3>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
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

      <div>
        <q-btn label="connexion" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
      <p>Counter: {{ doubleCount }}</p>
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
