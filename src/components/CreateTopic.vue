<template>
  <q-card class="create-topic-qcard q-my-md q-pa-md">
    <q-form @submit="onSubmit">
      <q-input label="Titre" type="text" v-model="topicTitle" borderless />
      <q-separator />
      <q-input
        class="q-mb-md"
        type="textarea"
        placeholder="Ecrivez votre message ici..."
        v-model="topicBody"
        borderless
      />
      <q-separator />
      <q-btn class="q-mt-md" type="submit" label="envoyer" />
    </q-form>
  </q-card>
</template>

<script>
import { api } from "src/boot/axios";
import { useUserStore } from "src/pinia/user.store";

export default {
  name: "CreateTopic",

  data() {
    const userStore = useUserStore();
    return {
      topicTitle: "",
      topicBody: "",
      userStore,
    };
  },

  methods: {
    onSubmit(e) {
      // check user input
      if (this.topicTitle.length < 3 || this.topicBody.length < 3) {
        console.log("invalid input(s)");
        return;
      }
      api
        .post("http://localhost:3000/api/topic", {
          user_id: this.userStore.user_id,
          title: this.topicTitle,
          topicBody: this.topicBody,
        })
        .then((topic) => {
          console.log(topic);
          this.$router.replace("/");
        })
        .catch(() => console.log("error creating topic"));
    },
  },
};
</script>
<style lang="scss">
.create-topic-qcard {
  width: 100%;
}
</style>
