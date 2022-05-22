import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import vuetify from './plugins/vuetify';

import LoadingOverlay from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.component('loading-overlay', LoadingOverlay);

Vue.config.productionTip = false

let app
store.dispatch('user/onAuthStateChanged', () => {
  if (!app) {
    app = new Vue({
      router,
      store,
      i18n,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
