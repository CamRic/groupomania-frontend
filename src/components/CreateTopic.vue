<template>
  <q-card class="create-topic-qcard q-my-md q-pa-md">
    <q-form>
      <q-input label="Titre" type="text" v-model="topicTitle" borderless />
      <q-separator />
      <q-input
        class="q-mb-md"
        type="textarea"
        placeholder="Ecrivez votre message ici..."
        v-model="topicBody"
        borderless
      />
      <q-separator />
      <q-btn class="q-mt-md" label="envoyer" />
    </q-form>
  </q-card>
</template>
<script>
export default {
  name: "CreateTopic",

  data() {
    return {
      topicTitle: "",
      topicBody: "",
    };
  },
};
</script>
<style lang="scss">
.create-topic-qcard {
  width: 100%;
}
</style>
