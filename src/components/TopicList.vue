<template>
  <div class="topic-list-container">
    <q-table :rows="rows" :columns="columns"> </q-table>
  </div>
</template>

<script>
import { useUserStore } from "../pinia/user.store";

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

const rows = [
  {
    sujet: "Ceci est un sujet",
    auteur: "Monsire",
    messages: 25,
    dernier: "31/02/2015",
  },
];

export default {
  name: "TopicList",

  data() {
    const userStore = useUserStore();
    return {
      userStore,
      columns,
      rows,
    };
  },
};
</script>

<style lang="scss"></style>
