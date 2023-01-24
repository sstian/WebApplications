<template>
  <h3>我是About的内容</h3>
</template>

<script>
export default {
  name: "MyAbout",

  // 组件内路由守卫
  // 通过路由规则，进入该组件时
  beforeRouteEnter(to, from, next) {
    console.log("MyAbout - beforeRouteEnter(): to, from, next", to, from, next);
    // 判断是否需要鉴权
    if (!to.meta.isAuth) {
      next();
      return;
    }
    // 鉴权
    const school = localStorage.getItem("school");
    if (school !== "snowflake") {
      window.alert(`学校名 ${school} 不对，无权限查看!`);
      return;
    }
    next();
  },
  // 通过路由组件，离开该组件时
  beforeRouteLeave(to, from, next) {
    console.log("MyAbout - beforeRouteLeave(): to, from, next", to, from, next);
    next();
  },
};
</script>

<style>
</style>