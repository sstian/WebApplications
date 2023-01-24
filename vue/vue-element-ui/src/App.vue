<template>
  <div>
    <button>原生button</button>
    <input type="text" />

    <snow-row>
      <snow-button>默认按钮</snow-button>
      <snow-button type="primary">主要按钮</snow-button>
      <snow-button type="success">成功按钮</snow-button>
      <snow-button type="info">信息按钮</snow-button>
      <snow-button type="warning">警告按钮</snow-button>
      <snow-button type="danger">危险按钮</snow-button>
    </snow-row>
    <snow-row>
      <snow-button icon="snow-icon-search" circle></snow-button>
      <snow-button type="primary" icon="snow-icon-edit" circle></snow-button>
      <snow-button type="success" icon="snow-icon-check" circle></snow-button>
      <snow-button type="info" icon="snow-icon-message" circle></snow-button>
      <snow-button
        type="warning"
        icon="snow-icon-star-off"
        circle
      ></snow-button>
      <snow-button type="danger" icon="snow-icon-dsnowete" circle></snow-button>
    </snow-row>
    <snow-date-picker type="date" placeholder="选择日期"> </snow-date-picker>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Hsnowvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
