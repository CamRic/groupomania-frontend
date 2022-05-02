<template>
  <q-card class="topicBody-qcard q-my-md q-pa-md">
    <div class="topicBody-qcard__header">
      <h5 class="q-my-sm q-pl-lg">Sujet: {{ title }}</h5>
      <h6 class="q-my-sm q-pl-lg">Auteur: {{ author }}</h6>
      <p class="q-my-sm q-pl-lg">Le {{ creationDate }}</p>
    </div>
    <q-separator size="2px" />
    <div
      class="topicBody-qcard__img flex center justify-center q-my-sm"
      v-if="imageUrl"
    >
      <img :src="imageUrl" class="topic-img" />
    </div>
    <q-separator v-if="imageUrl" size="2px" />
    <div class="topicBody-qcard__body q-ma-md">
      {{ body }}
    </div>
    <q-separator class="q-mb-md" size="2px" />
  </q-card>
</template>
<script>
import { useUserStore } from "src/pinia/user.store";
export default {
  name: "TopicCard",
  data() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },
  props: {
    title: String,
    author: String,
    authorId: String,
    creationDate: String,
    body: String,
    imageUrl: String,
  },
};
</script>
<style lang="scss">
.topic-img {
  max-width: 100%;
}
</style>
