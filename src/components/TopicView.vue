<template>
  <div class="topic-global-container">
    <TopicCard
      :author="topicStore.getTopicCreatorName"
      :body="topicStore.getTopicBody"
      :title="topicStore.getTopicTitle"
      :authorId="topicStore.getTopicCreatorId"
      :creationDate="topicStore.getTopicCreationDate"
      :imageUrl="topicStore.getTopicImageUrl"
    />
    <div class="flex justify-start">
      <q-btn label="actualiser" @click="reloadPost" />
      <q-btn
        class="q-ml-auto"
        v-if="
          topicStore.getTopicCreatorId === userStore.getUserId ||
          this.userRole === 'admin'
        "
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
        @deleted="reloadPage"
      />
    </div>

    <ReplyCard :topicId="topicStore.getTopicId" @emitted="reloadPage" />
  </div>
</template>

<script>
import PostCard from "src/components/PostCard.vue";
import { useUserStore } from "src/pinia/user.store";
import ReplyCard from "src/components/ReplyCard.vue";
import { useTopicStore } from "src/pinia/topic.store";
import TopicCard from "./TopicCard.vue";
import { Cookies, Notify, useQuasar } from "quasar";

export default {
  name: "TopicView",

  components: { PostCard, ReplyCard, TopicCard },

  props: {
    topicId: String,
  },

  data() {
    const $q = useQuasar();
    const topicStore = useTopicStore();
    const userStore = useUserStore();
    const userRole = Cookies.get("user_role");
    return {
      $q,
      userRole,
      userStore,
      topicStore,
    };
  },
  methods: {
    reloadPost() {
      this.topicStore.reloadTopicPostsList(this.topicId);
      this.$forceUpdate;
    },
    async reloadPage() {
      await new Promise((r) => setTimeout(r, 2500));
      this.reloadPost();
    },
    async deleteTopic() {
      await this.topicStore.deleteTopic(this.topicId);
      this.$q.notify({
        spinner: true,
        message: "Suppression du topic...",
        timeout: 2500,
      });
      await new Promise((r) => setTimeout(r, 2500));
      this.$router.replace("/");
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
