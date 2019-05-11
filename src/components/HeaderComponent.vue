<template>
    <div>
<b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#">TechLaw2019</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link :to="{path:'/'}">Inicio</router-link></b-nav-item>
        <b-nav-item><router-link :to="{path:'/sobrenosotros'}">¿Quiénes somos?</router-link></b-nav-item>
    </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  data() {
    return{

    }
  },
}
</script>


<style>

</style>
