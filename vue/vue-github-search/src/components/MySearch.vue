<template>
  <section className="jumbotron">
    <h3 className="jumbotron-heading">搜索github用户</h3>
    <div>
      <input
        type="text"
        placeholder="输入关健词点击搜索"
        v-model="keyWord"
      />&nbsp;
      <button @click="searchUsers">搜索</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "MySearch",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      // 请求前更新MyList的数据
      this.$bus.$emit("updateListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      axios.get(`/github-api/search/users?q=${this.keyWord}`).then(
        (response) => {
          console.log("request successfully", response);
          // 触发事件
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: "",
            users: response.data.items,
          });
        },
        (error) => {
          console.log("request failed", error);
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: error,
            users: [],
          });
        }
      );
    },
  },
};
</script>

<style>
</style>