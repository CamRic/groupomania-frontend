<template>
  <div class="topic-global-container">
    <h6>Sujet: {{ topicName }}</h6>
    <div class="flex justify-end">
      <q-btn label="actualiser" />
    </div>
    <PostCard />
    <ReplyCard />
  </div>
</template>

<script>
import PostCard from "src/components/PostCard.vue";
import ReplyCard from "src/components/ReplyCard.vue";
import { Dialog } from "quasar";

export default {
  name: "TopicView",

  components: {
    PostCard,
    ReplyCard,
  },

  data() {
    return {
      topicName: "Default topic name",
      posts: [],
    };
  },

  methods: {
    reply() {
      Dialog.create({
        title: "Réponse",
        message: "Ecrivez votre réponse (minimum 3 caractères)",
        prompt: {
          model: "",
          isValid: (val) => val.length > 2,
          type: "textarea",
        },
        cancel: true,
        persistent: true,
      }).onOk((data) => console.log(data));
    },
  },
};
</script>
<style lang="scss">
.topic-global-container {
  display: flex;
  flex-direction: column;
  width: 80%;
}
</style>
