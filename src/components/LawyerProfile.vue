<template>
    <div>
         <h1>Lawyer Profile</h1>
        <button type="submit" class="btn btn-primary" v-on:click="logout()">Cerrar sesión</button>
    </div>
</template>

<script>
export default {
    data() {
        return{

        }
    },
    methods:{
        logout(){
            var uid = auth.currentUser.uid;
            auth.signOut().then(()=>{    
            this.$router.replace("/")
        })
        }
    }
}
</script>
