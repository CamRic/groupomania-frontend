<template>
  <div>
    <q-table
      :rows="rows"
      :columns="columns"
      row-key="user_id"
      selection="multiple"
      v-model:selected="selected"
    >
    </q-table>
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
  {
    name: "user_id",
    label: "ID",
    align: "left",
    field: (row) => row.user_id,
  },
];

const rows = [
  {
    prenom: "Aldo",
    nom: "Filter",
    email: "aldo.filter@reich.de",
    user_id: "1488-30011933-08051945",
  },
];

export default {
  name: "UserList",

  data() {
    return {
      selected: [],
      columns,
      rows,
    };
  },

  methods: {
    rightClick(evt, row, index) {
      console.log("clicked: " + evt, row, index);
    },
  },
};
</script>
<style lang="scss"></style>
