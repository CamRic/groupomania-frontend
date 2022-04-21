<template>
  <div class="topic-global-container">
    <h6>Sujet: {{ topic.title }}</h6>
    <div class="flex justify-end">
      <q-btn label="actualiser" />
    </div>
    <PostCard
      :author="author"
      :body="topic.body"
      :createdAt="topic.createdAt"
    />

    <ReplyCard :topicId="topic.topic_id" />
  </div>
</template>

<script>
import PostCard from "src/components/PostCard.vue";
import { api } from "src/boot/axios";
import ReplyCard from "src/components/ReplyCard.vue";

export default {
  name: "TopicView",

  components: {
    PostCard,
    ReplyCard,
    PostCard,
  },

  props: {
    topic: Object,
    author: String,
    title: String,
  },

  data() {
    var topicData = JSON.parse(JSON.stringify(this.topic));
    console.log(topicData);
    var posts = topicData.replies;
    console.log(posts);
    return {
      topicName: "Default topic name",
      authorName: "",
      topicData,
      posts,
    };
  },
  methods: {},
};
</script>
<style lang="scss">
.topic-global-container {
  display: flex;
  flex-direction: column;
  width: 80%;
}
</style>
