<template>
  <ul>
    <li :style="{ opacity }">欢迎学习Vue</li>
    <li>News001 <input type="text" /></li>
    <li>News002 <input type="text" /></li>
    <li>News003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "MyNews",
  data() {
    return {
      opacity: 1,
    };
  },
  
  // 路由组件生命周期钩子，捕获激活状态
  activated() {
    console.log("MyNews - activated()");
    this.timer = setInterval(() => {
      console.log("setInterval()");
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    console.log("MyNews - deactivated()");
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>