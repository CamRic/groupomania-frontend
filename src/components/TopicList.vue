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
  name: "TopicList",

  data() {
    const userStore = useUserStore();
    var topicList = [];
    var rows = [];
    return {
      userStore,
      columns,
      rows,
      topicList,
    };
  },

  created(data) {
    api
      .get("http://localhost:3000/api/topic")
      .then((topics) => {
        this.topicList = topics.data.topics;
        console.log("topic lists received: " + JSON.stringify(this.topicList));
        for (let i = 0; i < this.topicList.length; i++) {
          console.log(this.topicList[i].user_id);
          api
            .get("http://localhost:3000/api/user/" + this.topicList[i].user_id)
            .then((user) => {
              var userName =
                user.data.user["first_name"] +
                " " +
                user.data.user["last_name"];
              this.rows.push({
                sujet: this.topicList[i].title,
                auteur: userName,
                messages: this.topicList[i].replies.replies.length,
                dernier: this.topicList[i].updatedAt,
                topic_id: this.topicList[i].topic_id,
              });
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  },
  methods: {
    goToTopicPage(evt, row, index) {
      this.$router.replace({ path: "/topic/" + row.topic_id });
    },
  },
};
</script>

<style lang="scss"></style>
