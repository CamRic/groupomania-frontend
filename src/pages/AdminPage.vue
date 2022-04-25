<template>
  <qpage class="flex column flex-start content-center groupomania-qpage">
    <h5 class="q-my-sm">Page administrateur</h5>
    <!-- <q-card class="q-my-md">
      <h6 class="q-my-sm">Liste des sujets</h6>
      <TopicList />
    </q-card> -->
    <!-- <q-card class="q-my-md">
      <h6 class="q-my-sm">Liste des utilisateurs</h6> -->
    <UserList />
    <!-- </q-card> -->
    <AdminTopicList />
  </qpage>
</template>
<script>
import UserList from "../components/UserList.vue";
import AdminTopicList from "src/components/AdminTopicList.vue";
import PostList from "src/components/PostList.vue";
export default {
  name: "AdminPage",
  components: { /*TopicList,*/ UserList, AdminTopicList },
};
</script>
<style lang="scss"></style>
