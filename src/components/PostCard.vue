<template>
  <q-card class="post-qcard q-my-md q-pa-md">
    <div class="post-qcard__header">
      <h6 class="q-my-sm">Name</h6>
      <p class="q-my-sm">Date</p>
    </div>
    <q-separator />
    <div class="post-qcard__body q-mt-sm">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores animi
      nostrum corporis enim dicta! Beatae provident quod recusandae dignissimos
      necessitatibus ipsam eligendi iste odio dolor, modi non blanditiis
      sapiente quasi.
    </div>
  </q-card>
</template>
<script>
export default {
  name: "PostCard",

  data() {
    return {
      author: "",
      date: "",
      body: "",
    };
  },
};
</script>
<style lang="scss">
.post-qcard {
  width: 100%;
}
</style>
