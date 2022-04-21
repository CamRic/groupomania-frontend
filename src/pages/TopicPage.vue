<template>
  <q-page class="flex column flex-start content-center groupomania-qpage">
    <h5>{{ topicId }}</h5>
    <TopicView :topic="topic" :author="topicAuthor" />
  </q-page>
</template>

<script>
import TopicView from "src/components/TopicView.vue";
import { useRouter } from "vue-router";
import { api } from "src/boot/axios";
import { useTopicStore } from "src/pinia/topic.store";

export default {
  name: "TopicPage",

  components: {
    TopicView,
  },

  data() {
    const topicStore = useTopicStore();
    const topicId = useRouter().currentRoute.value.params.id;
    var topicAuthor = this.$route.query.author;
    var topic = {
      topicStore,
      user_id: "",
      author: "",
      body: "",
      date: null,
    };

    return {
      topicAuthor,
      topic,
      topicId,
    };
  },

  created(data) {
    api
      .get("http://localhost:3000/api/topic/" + this.topicId)
      .then((res) => {
        console.log(res);
        this.topic = res.data.topic;
        console.log(this.topic);
        console.log(this.topic.user_id);
        api
          .get("http://localhost:3000/api/user/" + this.topic.user_id)
          .then((user) => {
            console.log("user: " + user);

            this.topic.author =
              user.data.first_name + " " + user.data.last_name;
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss"></style>
