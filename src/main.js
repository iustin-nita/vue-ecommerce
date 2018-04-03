import Vue from 'vue';
import store from './store';
import VeeValidate from 'vee-validate';
import App from './App';
import router from './router';


Vue.config.productionTip = false;
Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
