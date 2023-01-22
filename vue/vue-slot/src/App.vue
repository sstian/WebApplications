<template>
  <div class="container">
    <!-- 默认插槽 -->
    <!-- <CategoryDefault title="美食" :listData="foods">
      <img
        src="https://pics2.baidu.com/feed/a08b87d6277f9e2f127c9df9cdd2922cba99f3e5.jpeg@f_auto?token=4c654a2e6c2f3746ffc751269b3f300c"
        width="200px"
        height="200px"
        alt=""
      />
    </CategoryDefault>
    <CategoryDefault title="游戏" :listData="games">
      <ul>
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
    </CategoryDefault>
    <CategoryDefault title="电影" :listData="films">
      <video
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        width="200px"
        height="200px"
      ></video>
    </CategoryDefault> -->

    <!-- 具名插槽 -->
    <!-- <CategoryNamed title="美食" :listData="foods">
      <img
        slot="center"
        src="https://pics2.baidu.com/feed/a08b87d6277f9e2f127c9df9cdd2922cba99f3e5.jpeg@f_auto?token=4c654a2e6c2f3746ffc751269b3f300c"
        width="200px"
        height="200px"
        alt=""
      />
      <a slot="footer" href="www.sstian.top">更多美食</a>
    </CategoryNamed>
    <CategoryNamed title="游戏" :listData="games">
      <ul slot="center">
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
      <div slot="footer">
        <a href="www.sstian.top">单机游戏</a>
        <a href="www.sstian.top">网络游戏</a>
      </div>
    </CategoryNamed>
    <CategoryNamed title="电影" :listData="films">
      <video
        slot="center"
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        width="200px"
        height="200px"
      ></video>
      <template v-slot:footer>
        <div>
          <a href="www.sstian.top">经典</a>
          <a href="www.sstian.top">热门</a>
        </div>
      </template>
    </CategoryNamed> -->

    <!-- 作用域插槽 -->
    <CategoryScope title="游戏" :listData="games">
      <template scope="snowflake">
        {{ snowflake }}
        <ul>
          <li v-for="(game, index) in snowflake.games" :key="index">
            {{ game }}
          </li>
        </ul>
      </template>
    </CategoryScope>
    <CategoryScope title="游戏" :listData="games">
      <template scope="{games}">
        <h4 v-for="(game, index) in games" :key="index">
          {{ game }}
        </h4>
      </template>
    </CategoryScope>
    <CategoryScope title="游戏" :listData="games">
      <template slot-scope="snowflake">
        <ol>
          <li
            style="color: red"
            v-for="(game, index) in snowflake.games"
            :key="index"
          >
            {{ game }}
          </li>
        </ol>
      </template>
    </CategoryScope>
    
  </div>
</template>

<script>
// import CategoryDefault from "./components/CategoryDefault.vue";
// import CategoryNamed from "./components/CategoryNamed.vue";
import CategoryScope from "./components/CategoryScope.vue";

export default {
  name: "App",
  components: {
    // CategoryDefault,
    // CategoryNamed,
    CategoryScope,
  },
  data() {
    return {
      foods: ["火锅", "烧烤"],
      games: ["超级玛丽", "穿越火线"],
      films: ["想见你", "流浪地球"],
    };
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

.container {
  display: flex;
  justify-content: space-around;
}
</style>
