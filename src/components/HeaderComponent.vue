<template>
    <div>
<b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#">TechLaw2019</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link :to="{path:'/'}">Inicio</router-link></b-nav-item>
        <b-nav-item><router-link :to="{path:'/sobrenosotros'}">¿Quiénes somos?</router-link></b-nav-item>
        <b-nav-item v-if="isLogin === true"><router-link :to="{path:'/perfilabogado'}">Mi perfil</router-link></b-nav-item>
        <b-nav-item v-if="isLogin === true"><router-link :to="{path:'/propuestas'}">Propuestas</router-link></b-nav-item>
        <b-nav-item v-if="isLogin === true"><router-link :to="{path:'/codigoconducta'}">Código de conducta</router-link></b-nav-item>
    </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import { auth } from '../firebase.js';
export default {
  data() {
    return{
      isLogin: false
    }
  },
  created: function () {
    this.isLogin = false;
    if(auth.currentUser !== null) {
      this.isLogin = true;
    }
  }
}
</script>


<style>

</style>
