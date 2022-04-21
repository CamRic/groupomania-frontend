<template>
  <div class="topic-global-container">
    <h6>Sujet: {{ topicStore.getTopicTitle }}</h6>
    <div class="flex justify-end">
      <q-btn label="actualiser" @click="reloadPost" />
    </div>
    <PostCard
      :author="topicStore.creatorFullName"
      :body="topicStore.getTopicBody"
      :createdAt="topicStore.getTopicCreationDate"
    />

    <div v-for="post in topicStore.getTopicPostList" :key="post">
      <PostCard
        :author="post.author"
        :body="post.body"
        :createdAt="post.createdAt"
      />
    </div>
  </div>
</template>

<script>
import PostCard from "src/components/PostCard.vue";
import { api } from "src/boot/axios";
import ReplyCard from "src/components/ReplyCard.vue";
import { useTopicStore } from "src/pinia/topic.store";

export default {
  name: "TopicView",

  components: { PostCard, PostCard },

  props: {},

  data() {
    const topicStore = useTopicStore();
    return {
      topicStore,
    };
  },
  methods: {
    reloadPost(data) {
      console.log(this.topicStore.topicPosts);
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
