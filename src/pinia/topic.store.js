import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useTopicStore = defineStore("topic_store", {
  state: () => ({
    isLoaded: false,
    topicObject: {},
    creatorFullName: "",
    topicPosts: [],
  }),

  getters: {
    getLoadedState(data) {
      return this.isLoaded;
    },
    getTopic(data) {
      return this.topicObject;
    },
    getTopicId(data) {
      return this.topicObject.topic_id;
    },
    getTopicCreatorId(data) {
      return this.topicObject.user_id;
    },
    getTopicCreatorName(data) {
      return this.creatorFullName;
    },
    getTopicLastUpdate(data) {
      return this.topicObject.updatedAt;
    },
    getTopicCreationDate(data) {
      return this.topicObject.createdAt;
    },
    getTopicTitle(data) {
      return this.topicObject.title;
    },
    getTopicBody(data) {
      return this.topicObject.body;
    },
    getTopicPostList(data) {
      return this.topicPosts;
    },
  },

  actions: {
    async retrieveTopicData(topic_id) {
      this.isLoaded = false;
      this.topicObject = {};
      this.creatorFullName = "";
      this.topicPosts = [];
      // getting topic data from db
      const response = await api.get(
        "http://localhost:3000/api/topic/" + topic_id
      );

      this.topicObject = response.data.topic;

      // getting user name from db
      const response2 = await api.get(
        "http://localhost:3000/api/user/" + this.topicObject.user_id
      );
      console.log(response2);
      this.creatorFullName =
        response2.data.user.first_name + " " + response2.data.user.last_name;

      // getting posts datas
      console.log("replies count: " + this.topicObject.replies.replies.length);
      const topicReplies = this.topicObject.replies.replies;
      for (var i = 0; i < topicReplies.length; i++) {
        await api
          .get("http://localhost:3000/api/post/" + topicReplies[i])
          .then(async (res) => {
            var postData = {};
            postData["body"] = res.data.post.body;
            postData["createdAt"] = res.data.post.createdAt;
            var creatorId = res.data.post.user_id;
            // getting post creator name
            await api
              .get("http://localhost:3000/api/user/" + creatorId)
              .then((res1) => {
                postData["author"] =
                  res1.data.user.first_name + " " + res1.data.user.last_name;
                this.topicPosts.push(postData);
                console.log(this.topicPosts);
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      }

      this.isLoaded = true;
      return this.topicObject;
    },
  },
});
