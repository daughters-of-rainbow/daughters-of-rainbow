import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/svgIcon/index.js'
import vuetify from './plugins/vuetify'
import  {i18n} from  './plugins/vue-i18n'
import confirm from '@/plugins/confirm'
import Toast from './components/Toast/index'


    //  var vConsole = new VConsole();
Vue.config.productionTip = false
Vue.prototype.$confirm = confirm
Vue.prototype.$toast = Toast
new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
