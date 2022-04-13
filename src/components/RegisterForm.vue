<template>
  <div class="self-center items-center" style="width: inherit">
    <h5 class="q-mb-sm">Inscription</h5>
    <q-separator class="q-mb-lg" spaced="true" size="4px" />
    <q-form @submit="onSubmit">
      <q-input
        class="q-mb-lg"
        filled
        v-model="email"
        label="Adresse email"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Entrée non valide']"
      />

      <q-input
        class="q-mb-lg"
        filled
        type="password"
        v-model="password"
        label="Mot de passe"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Entrée non valide']"
      />

      <q-input
        class="q-mb-lg"
        filled
        type="password"
        v-model="validPassword"
        label="Vérification mot de passe"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Entrée non valide']"
      />

      <q-input
        class="q-mb-lg"
        filled
        v-model="first_name"
        label="Prenom"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Entrée non valide']"
      />

      <q-input
        class="q-mb-lg"
        filled
        v-model="last_name"
        label="Nom"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Entrée non valide']"
      />

      <a href="#">Se connecter</a>

      <div>
        <q-btn label="inscription" color="primary" />
      </div>
    </q-form>
  </div>
</template>
