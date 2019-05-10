<template>
    <!-- for create <p> -->
    <div>
        <h2>Código de conducta</h2>
        <p></p>
    </div>
</template>

<script>
import { db } from '../firebase.js';
import { auth } from '../firebase.js';

export default {
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