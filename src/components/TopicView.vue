<template>
  <div class="topic-global-container">
    <h5>Sujet: {{ topicName }}</h5>
    <div class="flex">
      <q-btn label="repondre" />
      <q-btn label="actualiser" style="margin-left: auto" />
    </div>
    <PostCard />
  </div>
</template>

<script>
import PostCard from "src/components/PostCard.vue";

export default {
  name: "TopicView",

  components: {
    PostCard,
  },

  data() {
    return {
      topicName: "Default topic name",
      posts: [],
    };
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
