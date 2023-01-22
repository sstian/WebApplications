<template>
  <div>
    <MyCount />
    <hr />
    <MyPerson />
  </div>
</template>

<script>
import MyCount from "./components/MyCount.vue";
import MyPerson from "./components/MyPerson.vue";

export default {
  name: "App",
  components: {
    MyCount,
    MyPerson,
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
