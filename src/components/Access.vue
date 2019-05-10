<template>
  <div>
    <div class="container mt-5">
      <div class="row">
          <h3>Acceso</h3>
      </div>
      <form v-on:submit.prevent="login">
        <div class="form-group">
          <div class="row">
            <label for="exampleInputEmail1">Email</label>
          </div>
          <div class="row">
            <div class="cl align-self-center">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introduce tu email" v-model="loginemail">
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label for="exampleInputPassword1">Contraseña</label>
          </div>
          <div class="row">
            <div class="cl align-self-center">
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña" v-model="loginpass">
            </div>
          </div>
        </div>
        <div class="row">
            <button type="submit" class="btn btn-primary">Acceder</button>
        </div>
        <div class="row">
            <button type="submit" class="btn btn-secondary btn-sm" v-on:click="RedirectRegistry()">Registrarse</button>
        </div>
      </form>
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
      loginemail: "",
      loginpass:""
    }
  },
  created: function () {
    //console.log(auth.currentUser.uid)
  },
  methods:{
        login(){
            auth.signInWithEmailAndPassword(this.loginemail,this.loginpass)
            .then((user)=>{
              this.$router.replace("/perfilabogado")
                // this.$router.replace("perfilabogado")
            })
            .catch((err)=>{
              alert(err)
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
