import Vue from 'vue';
import App from './App.vue';
import router from './router'


import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import VueFire from 'vuefire'

Vue.use(VueFire)
Vue.use(BootstrapVue)

// import firebaseConfig from './firebase'
// import VueFire from 'vuefire'
// import firebase from 'firebase/app'
// Vue.use(VueFire)
// firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
