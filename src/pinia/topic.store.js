import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useTopicStore = defineStore("topic_store", {
  state: () => ({
    topicId: "",
    topicTitle: "",
    topicCreatorId: "",
    topicCreatorName: "",
    topicBody: "",
    topicPostList: [],
    topicDateOfCreation: "",
    topicLastPostDate: "",
  }),

  action: {
    async retrieveTopicData(topic_id) {
      const response = await api.get(
        "http://localhost:3000/api/topic/" + topic_id
      );
      console.log(response);
      return response;
    },
  },
});
