<template>
  <q-page class="flex column flex-start content-center groupomania-qpage">
    <TopicView />
  </q-page>
</template>
<script>
import TopicView from "src/components/TopicView.vue";
export default {
  name: "TopicPage",

  components: {
    TopicView,
  },
};
</script>
<style lang="scss"></style>
