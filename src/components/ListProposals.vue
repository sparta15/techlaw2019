<template>
    <div v-for="prop in proposals">

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
        proposals: {
        source: db.ref("proposals")
        
        },
    }
}
</script>
