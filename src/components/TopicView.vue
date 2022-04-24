<template>
  <div class="topic-global-container">
    <!-- <h6>Sujet: {{ topicStore.getTopicTitle }}</h6> -->
    <TopicCard
      :author="topicStore.getTopicCreatorName"
      :body="topicStore.getTopicBody"
      :title="topicStore.getTopicTitle"
      :authorId="topicStore.getTopicCreatorId"
      :creationDate="topicStore.getTopicCreationDate"
    />
    <div class="flex justify-start">
      <q-btn label="actualiser" @click="reloadPost" />
      <q-btn
        class="q-ml-auto"
        v-if="topicStore.getTopicCreatorId === userStore.getUserId"
        label="supprimer"
        @click="deleteTopic"
      />
    </div>

    <div v-for="post in topicStore.getTopicPostList" :key="post">
      <PostCard
        :author="post.author"
        :body="post.body"
        :createdAt="post.createdAt"
        :author_id="post.user_id"
        :post_id="post.post_id"
      />
    </div>

    <ReplyCard :topicId="topicStore.getTopicId" />
  </div>
</template>

<script>
import PostCard from "src/components/PostCard.vue";
import { useUserStore } from "src/pinia/user.store";
import ReplyCard from "src/components/ReplyCard.vue";
import { useTopicStore } from "src/pinia/topic.store";
import TopicCard from "./TopicCard.vue";

export default {
  name: "TopicView",

  components: { PostCard, ReplyCard, TopicCard },

  props: {
    topicId: String,
  },

  data() {
    const topicStore = useTopicStore();
    const userStore = useUserStore();
    return {
      userStore,
      topicStore,
    };
  },
  methods: {
    reloadPost() {
      this.topicStore.reloadTopicPostsList(this.topicId);
      this.$forceUpdate;
    },
  },
  watch: {
    $route(to, from) {
      this.topicStore.$reset;
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
