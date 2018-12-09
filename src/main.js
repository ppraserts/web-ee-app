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
router.beforeEach((to, from, next) => {
  if(to.path !== '/login') {
    debugger
    var sss = router.$app.$store
    if(store.getters.isAuthenticated) {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.fullPath }})
    }
  } else {
    next();
  }
})

Vue.config.productionTip = false

new Vue({
  i18n,
  store,
  router,
  config,
  render: h => h(App),
}).$mount('#app')
