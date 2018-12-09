import config from '../../config'
//import router from '../../router'
import { i18n } from '../../locale/i18n'

// initial state
const state = {
  locale: 'th',
  showPreLoader: false,
  token: 'xxxx'
}

// getters
const getters = {
  displayLocale: (state) => {
    return (state.locale === 'th') ? 'en' : 'th'
  },
  displayPreLoader: () => {
    return state.showPreLoader
  },
  isAuthenticated: (state) => {
    return !!state.token
  }
}

// actions
const actions = {
  switchLocale: (context, payload) => {
    context.commit('switchLocale', payload)
  },
  toggleSidebar: (context, payload) => {
    context.commit('toggleSidebar', payload)
  },
  initBaseData : (context, payload) => {
    context.commit('initBaseData', payload)
  }
}

// mutations
const mutations = {
  switchLocale: (state, payload) => {
    if(payload !== ""){
      state.locale  = payload
    } else {
      state.locale  =  (state.locale === 'th') ? 'en' : state.locale = 'th'
    }

    i18n.locale = state.locale
    window.document.title = i18n.t('message.applicationName')
  },
  toggleSidebar:  () => {
    var currentClass = document.getElementById("app").className;
    document.getElementById("app").className = currentClass === "toggled" ? "" : "toggled";
  },
  initBaseData: () => {
      alert(config.api.path)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

i18n.locale = state.locale
window.document.title = i18n.t('message.applicationName')