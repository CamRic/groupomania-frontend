<template>
  <q-page class="flex justify-center">
    <div class="flex column align-center q-my-lg" style="width: 60%">
      <q-img
        class="self-center"
        src="../assets/icon-above-font.png"
        height="230px"
        style="max-width: 550px"
      />
      <LoginForm v-if="loging" />
      <RegisterForm v-else />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import LoginForm from "components/LoginForm.vue";
import RegisterForm from "components/RegisterForm.vue";

export default defineComponent({
  name: "LoginPage",

  components: {
    LoginForm,
    RegisterForm,
  },

  data() {
    var loging = false;
    return {
      loging,
    };
  },
});
</script>
