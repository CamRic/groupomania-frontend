<template>
  <q-page class="flex column flex-start content-center pink-bg">
    <div class="flex align-center">
      <LoginForm v-if="loging" />
      <RegisterForm v-else @switchForm="changeForm" />
    </div>
    <p v-if="loging" @click="changeForm">S'inscrire</p>
    <p v-else @click="changeForm">Se connecter</p>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import LoginForm from "components/LoginForm.vue";
import RegisterForm from "components/RegisterForm.vue";
import { api } from "src/boot/axios";

export default defineComponent({
  name: "LoginPage",

  components: {
    LoginForm,
    RegisterForm,
  },

  data() {
    var loging = true;
    return {
      loging,
    };
  },

  methods: {
    changeForm(data) {
      this.loging = !this.loging;
      console.log(this.loging);
    },
  },
});
</script>

<style lang="scss" scoped>
.pink-bg {
  background-color: $groupomania2;
  width: 100%;
}
p {
  cursor: pointer;
}
</style>
