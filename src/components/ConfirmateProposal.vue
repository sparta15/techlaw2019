<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col align-self-center">
          <h3 class="text-center">Propuesta Enviada</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <h5>Tu propuesta ha sido enviada y pronto estará disponible.</h5>
        </div>
        <div class="col-4"></div>
      </div>
      <div class="row">
        <div class="col-5"></div>
        <div class="col-2">
          <img src="../assets/check-green.png">
        </div>
        <div class="col-5"></div>
      </div>
      <div class="row">
        <div class="col-5"></div>
        <div class="col-2">
          <button type="button" class="btn btn-primary btn-lg" v-on:click="Accept()">Aceptar</button>
        </div>
        <div class="col-5"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods:{
    Accept(){
      this.$router.replace("/")
    }
  }
}
</script>

<style>
  img {
    width: 75%;
    height: 75%;
  }
</style>
