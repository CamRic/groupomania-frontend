<template>
  <q-page class="flex column flex-start content-center groupomania-qpage">
    <h5>{{ topicId }}</h5>
  </q-page>
</template>

<script>
import { useRouter } from "vue-router";
import { api } from "src/boot/axios";
import { useTopicStore } from "src/pinia/topic.store";

export default {
  name: "TopicPage",

  components: {},

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
      .retrieveTopicData(topicId)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss"></style>
