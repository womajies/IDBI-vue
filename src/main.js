import Vue from 'vue';

import App from './App.vue';
import store from './store';
import router from './router';
import cxltToastr from 'cxlt-vue2-toastr'
import swiperCore, { Navigation, Scrollbar, Pagination } from 'swiper';

import '@/assets/js/index.js';

import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
import '/node_modules/swiper/swiper-bundle.css';
import '@/style/index.scss';
import '@/assets/main.css';

swiperCore.use([Navigation, Scrollbar, Pagination])

const toastrConfigs = {
  position: 'top right',
  showDuration: 2000,
  timeOut: 4000
}
Vue.use(cxltToastr, toastrConfigs)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
