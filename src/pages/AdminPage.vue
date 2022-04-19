<template>
  <qpage class="flex column flex-start content-center groupomania-qpage">
    <h5 class="q-my-sm">Page administrateur</h5>
    <q-card class="q-my-md">
      <h6 class="q-my-sm">Liste des sujets</h6>
      <TopicList />
    </q-card>
    <q-card class="q-my-md">
      <h6 class="q-my-sm">Liste des utilisateurs</h6>
      <UserList />
    </q-card>
  </qpage>
</template>
<script>
import TopicList from "src/components/TopicList.vue";
import UserList from "./UserList.vue";
export default {
  name: "AdminPage",
  components: { TopicList, UserList },
};
</script>
<style lang="scss"></style>
