<template>
    <div class="container">
        <lawyer-navbar class="mt-3 mb-3"></lawyer-navbar>
    <div v-if="proposals !== undefined" class="container">
        <div v-for="(prop, index) in proposals" v-bind:key="index">
            <div>
                <p><strong>Título{{ prop.title }}</strong></p>
                <p>Descripción{{ prop.description }}</p>
                <p>Votos: {{ prop.numberofvotes }}</p>
                <button class="btn btn-success m-3" v-on:click="vote(prop)">Dar mi voto</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { db } from '../firebase.js';
import { auth } from '../firebase.js';
import LawyerNavbar from './LawyerNavbar';

export default {
    components:{
        LawyerNavbar
    },
    data() {
        return{
            
        }
    },
    firebase: {
        proposals: {
        source: db.ref("proposals"),        
        },
    },
    methods:{
        vote(prop){
            var uid =auth.currentUser.uid;
            db.ref("proposals").child(prop.uid).child("votes").child(uid).push(uid);

            db.ref("proposals").child(prop.uid).child("votes").on("value", (snapshot) => {
                let obj = snapshot.val();
                let result = Object.keys(obj)
                db.ref("proposals").child(prop.uid).child("numberofvotes").set(result.length);

                }, function (errorObject) {
                console.log(errorObject);
            });

           
        },
    }
}
</script>
