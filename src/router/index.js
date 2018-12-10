import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login.vue'
import ExamTime from '../pages/ExamTime.vue'
import Import from '../pages/Import.vue'
/*import ExamTime from '../pages/ExamTime.vue'
import Import from '../pages/Import.vue'
import Process from '../pages/Process.vue'
import ProcessEdit from '../pages/ProcessEdit.vue'
import Authen from '../pages/Authen.vue'*/

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'message.login', component: Login },
    { path: '/login', name: 'message.login', component: Login },
    { path: '/ExamTime', component: ExamTime, name: 'message.menus.2', meta: { requiresAuth: true } },
    { path: '/import', component: Import, name: 'message.menus.3_1', meta: { requiresAuth: true } },
    /*{ path: '/examtime', component: ExamTime },
    { path: '/import', component: Import },
    { path: '/process', component: Process },
    { path: '/processedit', component: ProcessEdit },
    { path: '/authen', component: Authen }*/
]

let router = new VueRouter({
    routes: routes
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('jwt') === null) {
        next({ path: '/login', query: { redirect: to.fullPath }})
      } else {
        next()
      }
    } else {
      if(to.path === "/") {
        next('/import')
      }
      next();
    }
  })

export default router