<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个默认插槽 -->
    <slot>我是默认插槽的默认值</slot>
  </div>
</template>

<script>
export default {
  name: "CategoryDefault",
  props: ["listData", "title"],
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
</style>