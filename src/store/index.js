import Vue from 'vue'
import Vuex from 'vuex'
import applications from './modules/applications'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    applications
  },
  strict: debug
})