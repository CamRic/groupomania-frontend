<template>
  <q-card class="post-qcard q-my-md q-pa-md">
    <div class="post-qcard__header">
      <h6 class="q-my-sm q-pl-lg">{{ author }}</h6>
    </div>
    <q-separator />
    <div class="post-qcard__body q-mt-sm">
      {{ body }}
    </div>
    <q-separator />
    <p class="q-my-sm flex justify-end">{{ createdAt }}</p>
    <q-icon
      v-if="userStore.getUserId === author_id"
      class="fa-solid fa-trash-can"
    />
  </q-card>
</template>
<script>
import { useUserStore } from "src/pinia/user.store";
export default {
  name: "PostCard",

  data() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },

  props: {
    post_id: String,
    author: String,
    author_id: String,
    body: String,
    createdAt: String,
  },
};
</script>
<style lang="scss">
.post-qcard {
  width: 100%;
}
</style>
