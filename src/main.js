import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'

require('dotenv').config()
const API_KEY = process.env.API_KEY

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,
  vuetify,
  API_KEY,
  render: h => h(App)
}).$mount('#app')
