import Vue from "vue";
import App from "./App.vue";
// 引入VueRouter
import VueRouter from "vue-router";
// 引入路由器
import router from "./router";

Vue.config.productionTip = false;
// 应用VueRouter插件
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  // 配置路由器
  router
}).$mount("#app");
