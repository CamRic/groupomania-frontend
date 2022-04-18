<template>
  <q-btn-dropdown
    color="purple"
    :label="userStore.getFirstName"
    style="width: 150px"
  >
    <q-list>
      <q-item>
        <q-item-section>
          <q-item-label @click="this.$router.push('/user')"
            >Mon profil</q-item-label
          >
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>Mes sujets</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label @click="this.$router.replace({ path: '/' })"
            >Mes participations</q-item-label
          >
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>Nouveau sujet</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label @click="userStore.disconnect">Deconnexion</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
import { useUserStore } from "src/pinia/user.store";

export default {
  name: "ProfilNav",

  data() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },

  computed: {
    getFullName(data) {
      return this.userStore.getUserName;
    },
  },
};
</script>
