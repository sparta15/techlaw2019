<template>
  <div>
    <div class="container mt-5">
      <h3>Propuesta Enviada</h3>
      <img src="chack-green.png" alt="White Check">
      <button type="button" class="btn btn-primary" v-on:click="Accept()">Aceptar</button>
    </div>
  </div>
</template>

<script>

export default {
  methods:{
    CreateProposal(){
      this.$router.replace("/nuevapropuesta")
    }
    AccessDocument(){
      this.$router.replace
    }
  }
}
</script>
