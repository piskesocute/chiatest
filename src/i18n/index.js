import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './langs/en.json'
import zhHant from './langs/zh-hant.json'

Vue.use(VueI18n)

const locale = localStorage.getItem('locale') || 'zh-hant'

const i18n = new VueI18n({
  locale,
  messages: { 
    en,
    'zh-hant': zhHant
  }
})

i18n['availableLocaleOptions'] = [
  { value: 'en', text: en.__languagename },
  { value: 'zh-hant', text: zhHant.__languagename }
]

export default i18n