<template>
  <q-page class="flex flex-center">
    <div style="width: 60%">
      <q-img src="../assets/icon-above-font.png" />
      <LoginForm />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import LoginForm from "components/LoginForm.vue";
import { useCounterStore } from "../pinia/counter";

export default defineComponent({
  name: "LoginPage",

  components: {
    LoginForm,
  },
});
</script>
