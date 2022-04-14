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
          <q-btn label="s'inscrire" color="primary" @click="onSubmit" />
        </div>
      </q-form>
    </div>
  </q-card>
</template>

<script>
export default {
  name: "RegisterForm",

  components: {},

  data() {
    return {
      password: "",
      email: "",
    };
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
