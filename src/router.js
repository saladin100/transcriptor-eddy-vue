import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TermsOfUse from './views/TermsOfUse.vue'
import Imprint from './views/Imprint.vue'
import PrivacyPolicy from './views/PrivacyPolicy.vue'
import Purchase from './views/Purchase.vue'
import Settings from './views/Settings.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/terms-of-use',
      component: TermsOfUse
    },
    {
      path: '/imprint',
      component: Imprint
    },
    {
      path: '/privacy-policy',
      component: PrivacyPolicy
    },
    {
      path: '/purchase',
      component: Purchase
    },
    {
      path: '/settings',
      component: Settings
    }
  ]
})