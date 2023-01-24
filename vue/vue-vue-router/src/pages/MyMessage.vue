<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.id">
        <!-- 1. query参数 传递-->
        <!-- to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link> -->
        <!-- to的对象写法 -->
        <router-link
          :to="{
            path: '/home/message/detail',
            // name: &quot;xiangqing&quot;,
            query: {
              id: m.id,
              title: m.title,
            },
          }"
          >{{ m.title }}
        </router-link>
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>

        <!-- 2. param参数 传递-->
        <!-- to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link> -->
        <!-- to的对象写法，必须使用命令路由name配置 -->
        <!-- <router-link
          :to="{
            name: 'xiangqing',
            params: {
              id: m.id,
              title: m.title,
            },
          }"
          >{{ m.title }}
        </router-link> -->
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MyMessage",
  data() {
    return {
      messages: [
        { id: "001", title: "message1", content: "待到秋来九月八" },
        { id: "002", title: "message2", content: "我花开后百花杀" },
        { id: "003", title: "message3", content: "冲天香阵透长安" },
        { id: "004", title: "message4", content: "满城尽带黄金甲" },
      ],
    };
  },
  methods: {
    // 编程式路由导航
    pushShow(m) {
      this.$router.push({
        path: "/home/message/detail",
        // name: "xiangqing",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
    replaceShow(m) {
      this.$router.replace({
        path: "/home/message/detail",
        // name: "xiangqing",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
  },
};
</script>

<style>
</style>