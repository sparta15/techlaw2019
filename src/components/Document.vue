<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4">c
        <button type="button" class="btn btn-primary" v-on:click="CreateProposal()">Crear Propuesta</button>
      </div>
      <div class="col-sm-8">
        <div class="card" style="width: 18rem;">
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
