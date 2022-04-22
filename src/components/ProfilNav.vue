<template>
  <q-btn-dropdown color="purple" :label="UserName" style="width: 150px">
    <q-list>
      <q-item>
        <q-item-section>
          <q-item-label @click="this.$router.replace('/user')"
            >Mon profil</q-item-label
          >
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label @click="this.$router.replace('/newtopic')"
            >Nouveau sujet</q-item-label
          >
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label @click="disconnectSelf">Deconnexion</q-item-label>
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

  props: {
    UserName: String,
  },

  computed: {
    getFullName(data) {
      return this.userStore.getUserName;
    },
  },

  methods: {
    disconnectSelf() {
      this.userStore.disconnect();
      this.$router.replace({ path: "/login" });
    },
  },
};
</script>
