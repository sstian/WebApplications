<template>
  <ul>
    <li>消息编号：{{ id }}</li>
    <li>消息标题：{{ title }}</li>
   
    <!-- 1. query参数 接收 -->
    <!--
    <li>消息编号：{{ $route.query.id }}</li>
    <li>消息标题：{{ $route.query.title }}</li>
     -->
    <!-- 2. params参数 接收 -->
    <!--
    <li>消息编号：{{ $route.params.id }}</li>
    <li>消息标题：{{ $route.params.title }}</li>
    -->
  </ul>
</template>

<script>
export default {
  name: "MyDetail",
  props: ["id", "title"],
  mounted() {
    console.log("this.$route", this.$$route);
  },
};
</script>

<style>
</style>