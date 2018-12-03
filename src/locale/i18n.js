import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './lang/en'
import th from './lang/th'

const messages = {
  en: en,
  th: th
}

Vue.use(VueI18n)

export const i18n = new VueI18n({
  //locale: 'en', // set locale
  messages, // set locale messages
})