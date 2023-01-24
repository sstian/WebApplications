import Vue from "vue";
import App from "./App.vue";

// 完整引入
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
import { Button, Row, DatePicker } from 'element-ui';

// 关闭Vue的生产提示
Vue.config.productionTip = false;

// 应用ElementUI插件
// Vue.use(ElementUI);

// Vue.component(Button.name, Button);
Vue.component("snow-button", Button);
Vue.component("snow-row", Row);
Vue.component("snow-date-picker", DatePicker);

new Vue({
  render: h => h(App),
}).$mount("#app");
