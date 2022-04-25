<template>
  <div>
    <q-card>
      <div class="list__header flex row justify-between">
        <h6 class="q-my-sm">Liste des utilisateurs</h6>
        <q-btn label="supprimer" @click="deleteUser" />
      </div>
      <q-table
        dense
        :rows="rows"
        :columns="columns"
        row-key="user_id"
        selection="multiple"
        v-model:selected="selected"
      />
    </q-card>
  </div>
</template>
<script>
const columns = [
  {
    name: "prenom",
    label: "Prénom",
    align: "left",
    field: (row) => row.prenom,
  },
  {
    name: "nom",
    label: "Nom",
    align: "left",
    field: (row) => row.nom,
  },
  {
    name: "email",
    label: "Email",
    align: "left",
    field: (row) => row.email,
  },
  // {
  //   name: "user_id",
  //   label: "ID",
  //   align: "left",
  //   field: (row) => row.user_id,
  // },
];

import { api } from "src/boot/axios";
import { Cookies } from "quasar";

export default {
  name: "UserList",

  data() {
    var userList = [];
    var rows = [];
    return {
      userList,
      selected: [],
      columns,
      rows,
    };
  },

  created(data) {
    api
      .get("/user")
      .then((users) => {
        console.log(users);
        this.userList = users.data.users;
        for (let user of this.userList) {
          console.log(user);
          this.rows.push({
            prenom: user.first_name,
            nom: user.last_name,
            email: user.email,
            user_id: user.user_id,
          });
        }
      })
      .catch((err) => console.log(err));
  },

  methods: {
    rightClick(evt, row, index) {
      console.log("clicked: " + evt, row, index);
    },
    async deleteUser(data) {
      for (let user of this.selected) {
        await api.delete("/user/" + user.user_id, {
          headers: { Authorization: "Bearer: " + Cookies.get("token") },
        });
      }
      this.refreshData();
    },
    async refreshData(data) {
      this.rows = [];
      this.userList = [];
      api
        .get("/user")
        .then((users) => {
          console.log(users);
          this.userList = users.data.users;
          for (let user of this.userList) {
            console.log(user);
            this.rows.push({
              prenom: user.first_name,
              nom: user.last_name,
              email: user.email,
              user_id: user.user_id,
            });
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style lang="scss"></style>
