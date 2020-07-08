import Vue from "vue";
import App from "./App.vue";
import Loader from "@/utils/Loader";
import Heart from "@/utils/Heart";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";

Vue.component("Heart", Heart);
Vue.component("Loader", Loader);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
