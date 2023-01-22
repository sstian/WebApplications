<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个默认插槽 -->
    <slot :games="games">我是作用域插槽的默认值</slot>
  </div>
</template>

<script>
export default {
  name: "CategoryScope",
  props: ["title"],
  data() {
    return {
      games: ["超级玛丽", "穿越火线"]
    }
  }
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
</style>