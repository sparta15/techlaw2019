<template>
  <div>
    <div class="container mt-5 mb-5">
    <h3>Registro</h3>
    <form v-on:submit.prevent="register">
      <div class="form-group">
        <label>Nombre</label>
        <input type="text" class="form-control" placeholder="Nombre" v-model="name">
      </div>
      <div class="form-group">
        <label>Apellidos</label>
        <input type="text" class="form-control" placeholder="Apellidos" v-model="lastname">
      </div>
      <div class="form-group">
        <label>Número de colegiado</label>
        <input type="text" class="form-control" placeholder="Introduce tu número ICA" v-model="numICA">
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" placeholder="Introduce tu email" v-model="email">
      </div>
      <div class="form-group">
        <label>Contraseña</label>
        <input type="password" class="form-control" placeholder="Contraseña" v-model="pass">
      </div>
      <div class="form-group">
        <label>Confirma contraseña</label>
        <input type="password" class="form-control" id="exampleInputPassword2" placeholder="confirma contraseña" v-model="confirmpass">
      </div>
      <button type="submit" class="btn btn-primary">Registrarte</button>
    </form>
    </div>
    <div class="container mt-5">
    <h3>Acceso</h3>
    <form v-on:submit.prevent="login">
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" placeholder="Introduce tu email" v-model="loginemail">
      </div>
      <div class="form-group">
        <label>Contraseña</label>
        <input type="password" class="form-control" placeholder="Contraseña" v-model="loginpass">
      </div>
       <div v-if="passWrong === true">
          <div class="alert alert-danger mt-3" role="alert">
          La contraseña es incorrecta!
          </div>
      </div>
      <button type="submit" class="btn btn-primary mt-3 mb-5">Acceder</button>
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
      name: "",
      lastname:"",
      numICA: "",
      email:"",
      pass:"",
      confirmpass: "",
      loginemail: "",
      loginpass:"",
      passWrong: false
    }
  },
  created: function () {
    //console.log(auth.currentUser.uid)
  },
  methods:{
         register(){
            auth.createUserWithEmailAndPassword(this.email, this.pass).then( 
              (user) => {
                var uid = auth.currentUser.uid;
                db.ref("lawyers").child(uid).set({email: this.email, name: this.name, lastname: this.lastname, numICA: this.numICA});


                // this.$router.replace('perfilabogado')
                this.$router.replace("/perfilabogado")
              },
            function(err) {
                alert(err)
            });   
       
        },

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
        }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
