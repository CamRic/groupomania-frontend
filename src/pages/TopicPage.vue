<template>
  <q-page class="flex column flex-start content-center groupomania-qpage">
    <h5>{{ topicId }}</h5>
    <TopicView />
  </q-page>
</template>

<script>
import { useRouter } from "vue-router";
import { api } from "src/boot/axios";
import { useTopicStore } from "src/pinia/topic.store";
import TopicView from "src/components/TopicView.vue";

export default {
  name: "TopicPage",

  components: { TopicView },

  data() {
    const topicStore = useTopicStore();
    const topicId = useRouter().currentRoute.value.params.id;

    return {
      topicStore,
      topicId,
    };
  },

  created(data) {
    this.topicStore
      .retrieveTopicData(this.topicId)
      .then((res) => {
        console.log(res);
        console.log(this.topicStore.topicObject);
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss"></style>
