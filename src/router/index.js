import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Access from '../components/Access.vue';
import CreatePurpose from '../components/CreatePurpose.vue';
import ConfirmatePurpose from '../components/ConfirmatePurpose.vue';
import LawyerProfile from '../components/LawyerProfile.vue';


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/sobrenosotros',
        name: 'About',
        component: About
      },
      {
        path: '/acceso',
        name: 'Access',
        component: Access,
      },
      {
        path: '/nuevapropuesta',
        name: 'CreatePurpose',
        component: CreatePurpose,
      },
      {
        path: '/confirmacion',
        name: 'ConfirmatePurpose',
        component: ConfirmatePurpose,
      },
      {
        path: '/perfilabogado',
        name: 'LawyerProfile',
        component: LawyerProfile,
        meta: { requiresAuth: true },
      },
    ]
  })
  