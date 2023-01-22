import Vue from "vue";
import Vuex from "vuex";
import countOption from "./count";
import personOption from "./person";

// 应用Vuex插件
Vue.use(Vuex);

// 创建并暴露store
export default new Vuex.Store({
  modules: {
    count: countOption,
    person: personOption
  }
})
