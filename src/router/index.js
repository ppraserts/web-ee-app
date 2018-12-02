import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
/*import ExamTime from '../pages/ExamTime.vue'
import Import from '../pages/Import.vue'
import Process from '../pages/Process.vue'
import ProcessEdit from '../pages/ProcessEdit.vue'
import Authen from '../pages/Authen.vue'*/

Vue.use(VueRouter)

const routes = [
    { path: '/helloworld', component: HelloWorld },
    /*{ path: '/examtime', component: ExamTime },
    { path: '/import', component: Import },
    { path: '/process', component: Process },
    { path: '/processedit', component: ProcessEdit },
    { path: '/authen', component: Authen }*/
]

export default new VueRouter({
    routes: routes
})