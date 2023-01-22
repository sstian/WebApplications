<template>
  <div id="app">
    <div class="container">
      <MySearch />
      <MyList />
    </div>
  </div>
</template>

<script>
import MySearch from "./components/MySearch.vue";
import MyList from "./components/MyList.vue";

export default {
  name: "App",
  components: {
    MySearch,
    MyList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
