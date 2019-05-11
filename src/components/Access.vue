<template>
  <div>
<div class="container mt-5">
    <h3>Acceso</h3>
    <form v-on:submit.prevent="login">
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Introduce tu email" v-model="loginemail">
      </div>
      <div class="form-group">
        <label>Contraseña</label>
        <input type="password" class="form-control"  placeholder="Contraseña" v-model="loginpass">
      </div>
      <button type="submit" class="btn btn-primary">Acceder</button>
      <div v-if="passWrong === true">
        <div class="alert alert-danger mt-3" role="alert">
        La contraseña es incorrecta!
        </div>
    </div>
      <div class="mt-5">
        <router-link to="/registro">
          <a>No estás aún registrado?</a>
        </router-link>
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
      loginemail: "",
      loginpass:"",
      passWrong: false
    }
  },
  created: function () {
    //console.log(auth.currentUser.uid)
  },
  methods:{
        login(){
            auth.signInWithEmailAndPassword(this.loginemail,this.loginpass)
            .then((user)=>{
              // alert("Logueado!")
              this.$router.replace("/perfilabogado")
                // this.$router.replace("perfilabogado")
            })
            .catch((err)=>{
              this.passWrong = true;
              // alert(err)
          })
        },
        RedirectRegistry(){
          this.$router.replace("/registro")
        }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
