<template>
  <div>
    <div class="container mt-5">
    <h3>Nueva Propuesta</h3>
    <form>
      <div class="form-group">
        <textarea class="form-control" id="textOfProposal" rows="3" 
        placeholder="Añade aquí el testo de tu propusta">
        </textarea>
      </div>
      <div>
        <div class="row">
          <div class="col-8"></div>
          <div class="col-4">
            <button type="submit" class="btn btn-primary" v-on:click="SendProposal()">Enviar</button>
            <button type="button" class="btn btn-danger" v-on:click="CancelProposal()">Cancelar</button>
          </div>
        </div>
      </div>
    </form>
    </div>
  </div>
</template>

<script>
import {auth} from '../firebase'
import { db } from "../firebase";

export default {
  data() {
    return{
      purpose: "",
    }
  },
  methods:{
         SendProposal(){
            auth.createUserWithEmailAndPassword(this.email, this.password).then( 
              (user) => {   
                //var uid = auth.currentUser.uid;
                //db.ref("purpose").child(uid).set({purpose: this.purpose, name: this.name, lastname: this.lastname, numICA: this.numICA});

                this.$router.replace('/confirmacion')
              },
            function(err) {
                alert(err)
            });
        },

        CancelProposal(){
          this.$router.replace("/")
        }
  }
  
}
</script>
