<template>
  <div class="container  mt-5">
    <div class="row">
      <div class="col-sm-4">
        <button type="button" class="btn btn-primary" v-on:click="CreateProposal()">Crear Propuesta</button>
      </div>
      <div class="col-sm-4">
        <div class="card" style="width: 40rem;">
          <div class="card-body">
            <h5 class="card-title">Primer artículo</h5>
            <p class="card-text">Será considerado abogado, al Licenciado en Derecho, el cual ejercerá la función de dirección y defensa de las partes en todo tipo de proceso, o el que asesore jurídicamente</p>
              <button type="button" class="btn btn-primary" v-on:click="ReviewArticle()">Revisar</button>
              <div class="progress">
                <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 50%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4"></div>
      <div class="col-sm-4">
        <div class="card" style="width: 40rem;">
          <div class="card-body">
            <h5 class="card-title">Segundo artículo</h5>
            <p class="card-text">La tutela judicial efectiva se garantizará a aquellas personas cuyos ingresos anuales no superen los ocho mil euros.</p>
            <button type="button" class="btn btn-primary" v-on:click="ReviewArticle()">Revisar</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4"></div>
      <div class="col-sm-4">
        <div class="card" style="width: 40rem;">
          <div class="card-body">
            <h5 class="card-title">Tercer artículo</h5>
            <p class="card-text">Todo ciudadano tendrá derecho a la defensa, según lo establecido en nuestra Carta Magna. Esto se conseguirá mediante el derecho a una tutela judicial efectiva, quien podrá optar a ello si cumple con los requisitos establecidos en la ley.</p>
            <button type="button" class="btn btn-primary" v-on:click="ReviewArticle()">Revisar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {auth} from '../firebase'
import { db } from "../firebase";

export default {
  data() {
    return{

    }
  },
  methods:{
    ReviewArticle(){
      //Code to increment counter
    },
    CreateProposal(){
      this.$router.replace("/perfilabogado")
    }
  }
}
</script>
