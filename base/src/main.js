import Vue from "vue";
import App from "./App.vue";

import { registerMicroApps,start } from "qiankun";
registerMicroApps([
  {
    name: "childrenApp",
    entry: "//localhost:8080",
    container: "#container",
    activeRule: "/",
    props: { brand: 'qiankun' }
  },
]);
start()
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#parentApp");
