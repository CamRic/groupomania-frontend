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
  //d24bd40b-d34f-4ebe-8288-c8ee20eb84ee
  created(data) {
    if (!this.topicStore.isLoaded) {
      this.topicStore
        .retrieveTopicData(this.topicId)
        .then((res) => {
          console.log(res);
          console.log(this.topicStore.topicObject);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("topic data already loaded");
    }
    console.log("lol");
  },

  watch: {
    $route(to, from) {
      this.topicStore.$reset;
    },
  },
};
</script>

<style lang="scss"></style>
