<template>
  <q-card class="create-topic-qcard q-my-md q-pa-md">
    <q-form @submit="onSubmit">
      <q-input label="Titre" type="text" v-model="topicTitle" borderless />
      <q-separator />
      <input
        type="file"
        @change="handleFileUpload($event)"
        ref="file"
        name="file"
      />
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
import { useTopicStore } from "src/pinia/topic.store";
import { Cookies, useQuasar } from "quasar";

export default {
  name: "CreateTopic",

  data() {
    const topicStore = useTopicStore();
    const userStore = useUserStore();
    const $q = useQuasar;
    var image = null;
    return {
      topicStore,
      $q,
      file: "",
      image,
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

      let formData = new FormData();
      formData.append("topicBody", this.topicBody);
      formData.append("title", this.topicTitle);
      formData.append("user_id", this.userStore.user_id);
      formData.append("file", this.file);

      api
        .post("http://localhost:3000/api/topic", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer: " + Cookies.get("token"),
          },
        })
        .then(async (topic) => {
          console.log("new topic created!");
          console.log(topic);
          this.topicStore.retrieveTopicData(topic.data.topic.topic_id);
          this.$q.notify({
            spinner: true,
            message: "Création du sujet...",
            timeout: 1000,
          });
          await new Promise((r) => setTimeout(r, 1500));
          this.$router.replace("/topic/" + topic.data.topic.topic_id);
        })
        .catch(() => console.log("error creating topic"));
    },
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
    submitFile() {
      let formData = new FormData();
      formData.append("file", this.file);
    },
  },
};
</script>
<style lang="scss">
.create-topic-qcard {
  width: 100%;
}
</style>
