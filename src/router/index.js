import Vue from 'vue';
import Router from 'vue-router';
import { auth } from '../firebase';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Access from '../components/Access.vue';
import Register from '../components/Register.vue';
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
        path: '/registro',
        name: 'Register',
        component: Register,
      },
      {
        path: '/nuevapropuesta',
        name: 'CreateProposal',
        component: CreateProposal,
        beforeEnter: (to, from, next) => {  
          console.log(auth.currentUser) 
          if(auth.currentUser !== null) {
                next()
              } else {
                next('/')
              } 
            }
      },
      {
        path: '/confirmacion',
        name: 'ConfirmateProposal',
        component: ConfirmateProposal,
        beforeEnter: (to, from, next) => {  
          console.log(auth.currentUser) 
          if(auth.currentUser !== null) {
                next()
              } else {
                next('/')
              } 
            }
      },
      {
        path: '/perfilabogado',
        name: 'LawyerProfile',
        component: LawyerProfile,
        beforeEnter: (to, from, next) => { 
          console.log(auth.currentUser)  
          if(auth.currentUser !== null) {
                next()
              } else {
                next('/')
              } 
            }
      },      
      {
        path: '/propuestas',
        name: 'ListProposals',
        component: ListProposals,
        beforeEnter: (to, from, next) => { 
          console.log(auth.currentUser) 
          if(auth.currentUser !== null) {
                next()
              } else {
                next('/')
              } 
            }
      },
      {
        path: '/codigoconducta',
        name: 'LawyerCode',
        component: LawyerCode,
        beforeEnter: (to, from, next) => { 
          console.log(auth.currentUser)  
          if(auth.currentUser !== null) {
                next()
              } else {
                next('/')
              } 
            }
      },
    ]
  })
  