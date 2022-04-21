<template>
  <q-card class="reply-qcard q-my-md q-pa-md">
    <h5 class="q-my-sm">Répondre</h5>
    <q-separator />
    <q-form @submit="onSubmit">
      <q-input
        class="reply-qcard"
        borderless
        v-model="replyBody"
        type="textarea"
        placeholder="Ecrivez votre réponse ici"
      />
      <q-separator />
      <q-btn class="q-mt-md" type="submit" label="envoyer"></q-btn>
    </q-form>
  </q-card>
</template>

<script>
import { api } from "src/boot/axios";
import { useUserStore } from "src/pinia/user.store";

export default {
  name: "ReplyCard",

  props: {
    topicId: String,
  },

  data() {
    const userStore = useUserStore();
    var topicIdData = this.topicId;
    return {
      replyBody: "",
      userStore,
      topicIdData,
    };
  },

  computed: {
    getUserId(data) {
      return this.userStore.getUserId;
    },
  },
  methods: {
    async onSubmit(e) {
      // check user input
      if (this.replyBody.length < 3) {
        console.log("user input invalid!");
        return;
      }
      api
        .post("http://localhost:3000/api/post", {
          topic_id: this.topicId,
          user_id: this.getUserId,
          body: this.replyBody,
        })
        .then(async (res) => {
          var reqUrl =
            "http://localhost:3000/api/topic/" +
            this.topicId +
            "/post/" +
            res.data.newPost.post_id;

          const topicRes = await api.get(
            "http://localhost:3000/api/topic/" + this.topicId
          );
          console.log(topicRes);
          var repliesArray = topicRes.data.topic.replies.replies;
          repliesArray.push(res.data.newPost.post_id);
          console.log(repliesArray);
          const repliesObject = { replies: repliesArray };
          const prom = await api.put(
            "http://localhost:3000/api/topic/" + this.topicId,
            {
              replies: repliesObject,
            }
          );
          console.log(prom);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style lang="scss"></style>
