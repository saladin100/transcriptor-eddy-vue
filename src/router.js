import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TermsOfUse from './views/TermsOfUse.vue'
import Imprint from './views/Imprint.vue'
import PrivacyPolicy from './views/PrivacyPolicy.vue'
import FreeOrNot from './views/FreeOrNot.vue'


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
      path: '/free-or-not',
      component: FreeOrNot
    },
  ]
})