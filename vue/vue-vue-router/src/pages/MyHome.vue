<template>
  <div>
    <h3>我是Home的内容</h3>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <!-- 指定路由组件呈现的位置 -->
      <!-- 缓存路由组件，多个 -->
      <!-- 
      <keep-alive :include="['MyNews', 'MyMessage']">
        <router-view></router-view>
      </keep-alive> 
      -->
      <!-- 缓存路由组件，一个 -->
      <keep-alive include="MyNews">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHome",
};
</script>

<style>
</style>