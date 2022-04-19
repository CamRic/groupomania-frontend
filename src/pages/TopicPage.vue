<template>
  <q-page class="flex column flex-start content-center groupomania-qpage">
    <h5>{{ topicId }}</h5>
    <TopicView />
  </q-page>
</template>

<script>
import TopicView from "src/components/TopicView.vue";
import { useRouter } from "vue-router";

export default {
  name: "TopicPage",

  components: {
    TopicView,
  },

  // setup() {
  //   console.log(useRouter().currentRoute.value.params.id);
  // },

  data() {
    const topicId = useRouter().currentRoute.value.params.id;
    return {
      topicId,
    };
  },
};
</script>

<style lang="scss"></style>
