import "@style/reset.css";
// 解决移动端视网膜屏 1px border的问题
import "@style/border.css";
// 引入字体图标
import "@style/iconfont.css";
import "swiper/css/swiper.css";

import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "babel-polyfill";

// 移动端点击后有300ms 延迟的问题（某些移动端用300ms等待来判断用户是否双击）
import fastClick from "fastclick";
import router from "./router";
import store from "./store";

import App from "./App";

Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
fastClick.attach(document.body);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
