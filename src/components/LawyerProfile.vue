<template>
    <div>
         <h1>Lawyer Profile</h1>
         <p>Aqui va el codigo para añadir votaciones</p>
        <button type="submit" class="btn btn-primary" v-on:click="logout()">Cerrar sesión</button>
    </div>
</template>

<script>
import {auth} from '../firebase'

export default {
    data() {
        return{

        }
    },
    methods:{
        logout(){
            auth.signOut().then(()=>{    
            this.$router.replace("/")
        })
        }
    }
}
</script>
