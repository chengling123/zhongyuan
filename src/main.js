import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/font-awesome/css/font-awesome.css';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 加载组件
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
