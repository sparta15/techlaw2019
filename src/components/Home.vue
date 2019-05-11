<template>
  <div id="back-img" class="containerFluid text-center">
    <div class="jumbotron">
    <h1>Colabora redactando el código deontológico de la Abogacía</h1>
    <p>¿Eres Abogado? Regístrate</p>
    <router-link :to="{path:'/acceso'}">
    <button class="btn btn-dark btn-lg">Acceder</button>
    </router-link>
    </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#back-img{
  background-image: url("../assets/lawyer.jpg");
  height: 1500px;
}
  .jumbotron{
    opacity: 0.5;
    filter: alpha(opacity=50); /* For IE8 and earlier */
    height: 2500px;
  }
  p{
    color: black;
    font-size: large;
  }
</style>
