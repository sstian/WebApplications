<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个默认插槽 -->
    <slot name="center">我是具名插槽的默认值，在中间</slot>
    <slot name="footer">我是具名插槽的默认值，在底部</slot>
  </div>
</template>

<script>
export default {
  name: "CategoryNamed",
  props: ["title"],
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
</style>