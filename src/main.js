import 'es6-promise/auto'
import Vue from 'vue'
import App from './App.vue'
import config from './config'
import store from './store'
import { i18n } from './locale/i18n'

//Bootstrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Font awesome
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

//Vue Router
import router from './router'

Vue.config.productionTip = false

new Vue({
  i18n,
  store,
  router,
  config,
  render: h => h(App),
}).$mount('#app')
