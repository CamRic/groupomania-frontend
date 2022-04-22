<template>
  <div class="topic-list-container">
    <q-table
      :rows="rows"
      :columns="columns"
      :row-key="(row) => row.topic_id"
      @row-click="goToTopicPage"
    >
    </q-table>
  </div>
</template>
<script>
import { useUserStore } from "../pinia/user.store";
import { useTopicStore } from "src/pinia/topic.store";
import { api } from "src/boot/axios";

const columns = [
  {
    name: "sujet",
    required: true,
    label: "Sujet",
    align: "left",
    field: (row) => row.sujet,
  },
  {
    name: "auteur",
    required: true,
    label: "Auteur",
    align: "left",
    field: (row) => row.auteur,
  },
  {
    name: "messages",
    required: true,
    label: "Messages",
    align: "left",
    field: (row) => row.messages,
  },
  {
    name: "dernier",
    required: true,
    label: "Dernier",
    align: "left",
    field: (row) => row.dernier,
  },
];

export default {
  name: "UserTopicList",

  data() {
    const userStore = useUserStore();
    const topicStore = useTopicStore();
    var topicList = [];
    var rows = [];
    return {
      userStore,
      columns,
      rows,
      topicStore,
      topicList,
    };
  },

  created(data) {
    api
      .get("/topic/user/" + this.userStore.getUserId)
      .then((topics) => {
        this.topicList = topics.data.topics;
        for (let i = 0; i < this.topicList.length; i++) {
          this.rows.push({
            sujet: this.topicList[i].title,
            auteur: this.userStore.getUserName,
            messages: this.topicList[i].replies.replies.length,
            dernier: this.topicList[i].updatedAt,
            topic_id: this.topicList[i].topic_id,
          });
        }
      })
      .catch((err) => console.log(err));
  },
  methods: {
    async goToTopicPage(evt, row, index) {
      await this.topicStore.retrieveTopicData(row.topic_id);
      this.$router.push({
        path: "/topic/" + row.topic_id,
        query: { author: row.auteur },
      });
    },
  },
};
</script>
<style lang="scss"></style>
