<template>
  <q-input
    class="q-mb-md"
    filled
    style="background-color: #ffdede; border-radius: 10px 10px 10px 10px"
    v-model="model"
    label="label"
    type="type"
  />
</template>

<script>
export default {
  name: "FormInput",

  props() {
    return {
      model: {
        type: String,
        required: true,
      },
      label: {
        type: String,
      },
      type: {
        type: String,
      },
    };
  },

  data() {
    return {};
  },
};
</script>
