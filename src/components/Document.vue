<template>
  <div class="container  mt-5">
    <div class="row">
      <div class="col-sm-4">
        <button type="button" class="btn btn-primary" v-on:click="CreateProposal()">Crear Propuesta</button>
      </div>
      <div class="col-sm-4">
        <div class="card" style="width: 40rem;">
          <div class="card-body">
            <h5 class="card-title">Título del artículo</h5>
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
            <h5 class="card-title">Título del artículo</h5>
            <p class="card-text">Texto del artículo</p>
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
            <h5 class="card-title">Título del artículo</h5>
            <p class="card-text">Texto del artículo</p>
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
      this.$router.replace("/nuevapropuesta")
    }
  }
}
</script>
