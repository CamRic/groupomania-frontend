<template>
  <q-card class="post-qcard q-my-md q-pa-md">
    <div class="post-qcard__header">
      <h6 class="q-my-sm q-pl-lg">{{ author }}</h6>
    </div>
    <q-separator size="2px" />
    <div class="post-qcard__body q-ma-sm">
      {{ body }}
    </div>
    <q-separator class="q-mt-md" size="2px" />
    <div class="flex row justify-between items-center q-mx-md">
      <p class="q-my-sm">
        {{ createdAt.split("T").join(" ").substring(0, 19) }}
      </p>
      <q-icon
        v-if="
          userStore.getUserId === author_id || userStore.getUserRole === 'admin'
        "
        class="fa-solid fa-trash-can gr-icon"
        color="red-4"
        @click="deleteSelf"
      />
    </div>
  </q-card>
</template>
<script>
import { useUserStore } from "src/pinia/user.store";
import { api } from "src/boot/axios";
import { Cookies, useQuasar } from "quasar";
import { Notify } from "quasar";

export default {
  name: "PostCard",

  data() {
    const $q = useQuasar();
    const userStore = useUserStore();
    return {
      $q,
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

  methods: {
    async deleteSelf(data) {
      await api.delete("/post/" + this.post_id, {
        headers: { Authorization: "Bearer: " + Cookies.get("token") },
      });
      this.$q.notify({
        spinner: true,
        message: "Suppression du message...",
        timeout: 1500,
      });
      this.$emit("deleted");
    },
  },
};
</script>
<style lang="scss">
.post-qcard {
  width: 100%;
}
.gr-icon:hover {
  cursor: pointer;
}
</style>
