<template>
    <div>
    <nav>
    <form class="form-inline">
        <router-link :to="{path:'/perfilabogado'}"><button class="btn btn-outline-success m-2" type="button">Mi Perfil</button></router-link>
        <router-link :to="{path:'/propuestas'}"><button class="btn btn-outline-success m-2" type="button">Propuestas</button></router-link>
        <router-link :to="{path:'/codigoconducta'}"><button class="btn btn-outline-success m-2" type="button">Código de conducta</button></router-link>
        <button type="submit" class="btn btn-secondary m-2" v-on:click="logout()">Cerrar sesión</button>
    </form>
    </nav>
    </div>
</template>
<script>
import {auth} from '../firebase';

export default {
    data() {
        return{

        }
    },
    methods:{
        logout(){
            auth.signOut().then(()=>{
                alert("Deslogueado!")
                this.$router.replace("/")
        })
        }
    }
}
</script>

