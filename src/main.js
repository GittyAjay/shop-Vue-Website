import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from './plugins/route'
import { store } from './store/store';
import "font-awesome/css/font-awesome.css";
import './styles/custom.scss'
import Firebase from 'firebase';
import CarbonComponentsVue from '@carbon/vue/src/index'
import VuejsDialog from 'vuejs-dialog';
// import VuejsDialogMixin from 'vuejs-dialog/dist/vuejs-dialog-mixin.min.js'; // only needed in custom components
 
// include the default style
import 'vuejs-dialog/dist/vuejs-dialog.min.css';

import { CarbonIconsVue } from '@carbon/icons-vue'

import icons from './plugins/icons'
import CKEditor from '@ckeditor/ckeditor5-vue';
import JsonExcel from 'vue-json-excel'



Vue.use(VuejsDialog);
Vue.use(require('vue-moment'));
Vue.component('downloadExcel', JsonExcel)
Vue.use(CKEditor);
Vue.use(CarbonIconsVue, icons);
Vue.use(CarbonComponentsVue);

Vue.config.productionTip = false


VueRouter.beforeEach((to, from, next) => {

  const currentUser = Firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next('/login');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

// eslint-disable-next-line no-unused-vars
Firebase.auth().onAuthStateChanged(function (user) {
  new Vue({
    store: store,
    render: h => h(App),
    router: VueRouter,
  }).$mount('#app')
});


