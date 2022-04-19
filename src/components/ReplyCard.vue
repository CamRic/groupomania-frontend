<template>
  <q-card class="reply-qcard q-my-md q-pa-md">
    <h5 class="q-my-sm">Répondre</h5>
    <q-separator />
    <q-input
      class="reply-qcard"
      borderless
      v-model="replyBody"
      type="textarea"
      placeholder="Ecrivez votre réponse ici"
    />
    <q-separator />
    <q-btn class="q-mt-md" label="envoyer"></q-btn>
  </q-card>
</template>
<script>
export default {
  name: "ReplyCard",

  data() {
    return {};
  },
};
</script>
<style lang="scss"></style>
