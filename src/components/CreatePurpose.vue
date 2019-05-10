<template>
  <div>
    <div class="container mt-5">
    <h3>Nueva Propuesta</h3>
    <form>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
        placeholder="Añade aquí el testo de tu propusta">
        </textarea>
      </div>
      <button type="submit" class="btn btn-primary" v-on:click="SendPurpose()">Enviar</button>
      <button type="submit" class="btn-danger" v-on:click="CancelPurpose()">Cancelar</button>
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
         SendPurpose(){
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

        CancelPurpose(){
          this.$router.replace("/")
        }
  }
  
}
</script>
