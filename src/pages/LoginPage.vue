<template>
  <q-page class="flex flex-center">
    <q-img src="../assets/icon.png" style="width: 80%" />
    <LoginForm />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import LoginForm from "components/LoginForm.vue";

export default defineComponent({
  name: "LoginPage",

  components: {
    LoginForm,
  },
});
</script>
