<template>
  <div>
    <q-card>
      <div class="list__header flex row justify-between">
        <h6 class="q-my-sm">Liste des sujets</h6>
        <q-btn label="supprimer" @click="deleteTopic" />
      </div>
      <q-table
        dense
        :rows="rows"
        :columns="columns"
        row-key="topic_id"
        selection="multiple"
        v-model:selected="selected"
      />
    </q-card>
  </div>
</template>
<script>
const columns = [
  {
    name: "sujet",
    label: "Sujet",
    align: "left",
    field: (row) => row.sujet,
  },
  {
    name: "author",
    label: "Auteur",
    align: "left",
    field: (row) => row.author,
  },
  {
    name: "topic_id",
    label: "ID",
    align: "left",
    field: (row) => row.topic_id,
  },
];

import { api } from "src/boot/axios";

export default {
  name: "AdminTopicList",

  data() {
    var topicList = [];
    var rows = [];
    return {
      topicList,
      selected: [],
      columns,
      rows,
    };
  },
  created(data) {
    api
      .get("/topic")
      .then((topics) => {
        console.log(topics);
        this.topicList = topics.data.topics;
        for (let topic of this.topicList) {
          console.log(topic);
          api
            .get("/user/" + topic.user_id)
            .then((user) => {
              console.log(user);
              this.rows.push({
                sujet: topic.title,
                author:
                  user.data.user.first_name + " " + user.data.user.last_name,
                topic_id: topic.topic_id,
              });
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  },

  methods: {
    async deleteTopic(data) {
      for (let topic of this.selected) {
        const top = await api.delete("/topic/" + topic.topic_id);
      }
      this.refreshData();
    },
    async refreshData(data) {
      this.rows = [];
      this.topicList = [];
      console.log(this.topicList);
      api
        .get("/topic")
        .then((topics) => {
          console.log(topics);
          this.topicList = topics.data.topics;
          for (let topic of this.topicList) {
            console.log(topic);
            api
              .get("/user/" + topic.user_id)
              .then((user) => {
                console.log(user);
                this.rows.push({
                  sujet: topic.title,
                  author: user.data.first_name + " " + user.data.last_name,
                  topic_id: topic.topic_id,
                });
              })
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style lang="scss"></style>
