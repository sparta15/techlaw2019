<template>
    <!-- for create <p> -->
    <div class="container">
        <lawyer-navbar class="mt-3 mb-3"></lawyer-navbar>
        <h2>Código de conducta</h2>
        <div v-for="(art, index) in articles" v-bind:key="index">
            <p></p>
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
        articles: {
        source: db.ref("articles")
        
        },
    }
}
</script>