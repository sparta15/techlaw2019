<template>
    <div class="container">
         <h1>Lawyer Profile</h1>
         <p>Aqui va el codigo para añadir votaciones</p>
    <form v-on:submit.prevent="createProposal">
      <div class="form-group">
        <label>Título del artículo</label>
        <input type="text" class="form-control" placeholder="Escribe el título del artículo" v-model="title">
      </div>
      <div class="form-group">
        <label>Contenido</label>
          <textarea class="form-control rounded-0" placeholder="Contenido" rows="10" v-model="description"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Proponer</button>
    </form>
    <div v-if="alertOk === true">
        <div class="alert alert-success mt-3" role="alert">
        La propuesta se registró con éxito!
        </div>
    </div>
        <button type="submit" class="btn btn-secondary mt-5" v-on:click="logout()">Cerrar sesión</button>
    </div>
</template>

<script>
import {auth} from '../firebase'
import { db } from "../firebase";

export default {
    data() {
        return{
            title:"",
            description:"",
            alertOk: false
        }
    },
    methods:{
        createProposal() {
            var uid = auth.currentUser.uid;
            var d = new Date()
            db.ref("proposals").child(uid).set({title: this.title, description: this.description, date: d});
            this.title = '';
            this.description = '';
            this.alertOk = true
        },
        logout(){
            auth.signOut().then(()=>{
                alert("Deslogueado!")
                this.$router.replace("/")
        })
        }
    }
}
</script>
