<template>
    <div>
         <h1>Lawyer Profile</h1>
         <p>Aqui va el codigo para añadir votaciones</p>
    <form v-on:submit.prevent="createProposal">
      <div class="form-group">
        <label>Título del artículo</label>
        <input type="text" class="form-control" placeholder="Escribe el título del artículo" v-model="title">
      </div>
      <div class="form-group">
        <label>Contenido</label>
        <input type="text" class="form-control" placeholder="Contenido" v-model="description">
      </div>
      <button type="submit" class="btn btn-primary">Proponer</button>
    </form>
        <button type="submit" class="btn btn-primary" v-on:click="logout()">Cerrar sesión</button>
    </div>
</template>

<script>
import {auth} from '../firebase'
import { db } from "../firebase";

export default {
    data() {
        return{
            title:"",
            description:""
        }
    },
    methods:{
        createProposal() {
            var uid = auth.currentUser.uid;
            var d = new Date()
            db.ref("proposals").child(uid).set({title: this.title, description: this.description, date: d});
        },
        logout(){
            auth.signOut().then(()=>{
            this.$router.replace("/")
        })
        }
    }
}
</script>
