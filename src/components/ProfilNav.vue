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
      <q-item v-if="this.userRole === 'admin'">
        <q-item-section>
          <q-item-label @click="this.$router.replace('/admin')"
            >Panneau Admin</q-item-label
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
import { Cookies } from "quasar";

export default {
  name: "ProfilNav",

  data() {
    const userStore = useUserStore();
    const userRole = Cookies.get("user_role");
    return {
      userRole,
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
