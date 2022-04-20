<template>
  <q-card class="post-qcard q-my-md q-pa-md">
    <div class="post-qcard__header">
      <h6 class="q-my-sm q-pl-lg">{{ author }}</h6>
    </div>
    <q-separator />
    <div class="post-qcard__body q-mt-sm">
      {{ body }}
    </div>
    <q-separator />
    <p class="q-my-sm flex justify-end">{{ createdAt }}</p>
  </q-card>
</template>
<script>
export default {
  name: "PostCard",

  props: {
    author: String,
    body: String,
    createdAt: String,
  },
};
</script>
<style lang="scss">
.post-qcard {
  width: 100%;
}
</style>
