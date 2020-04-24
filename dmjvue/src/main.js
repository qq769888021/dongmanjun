import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import elementUI from "element-ui";//引入elementUI
import 'element-ui/lib/theme-chalk/index.css';//引入elementUI样式文件

Vue.config.productionTip = false

axios.defaults.baseURL="http://127.0.0.1:5518/";
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;
Vue.use(elementUI);//注册elementUI


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
