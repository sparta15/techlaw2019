import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Access from '../components/Access.vue';
import CreateProposal from '../components/CreateProposal.vue';
import ConfirmateProposal from '../components/ConfirmateProposal.vue';
import LawyerProfile from '../components/LawyerProfile.vue';
import ListProposals from '../components/ListProposals.vue';
import LawyerCode from '../components/LawyerCode.vue';



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
        name: 'CreateProposal',
        component: CreateProposal,
      },
      {
        path: '/confirmacion',
        name: 'ConfirmateProposal',
        component: ConfirmateProposal,
      },
      {
        path: '/perfilabogado',
        name: 'LawyerProfile',
        component: LawyerProfile,
        meta: { requiresAuth: true },
      },      
      {
        path: '/propuestas',
        name: 'ListProposals',
        component: ListProposals,
        meta: { requiresAuth: true },
      },

    ]
  })
  