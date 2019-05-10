<template>
    <div v-if="proposals !== undefined">
        <div v-for="(prop, index) in proposals" v-bind:key="index">
            <div>
                <p><strong>{{ prop.title }}</strong></p>
                <p>{{ prop.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '../firebase.js';
import { auth } from '../firebase.js';

export default {
    data() {
        return{
            // proposals: []
        }
    },
    firebase: {
        proposals: {
        source: db.ref("proposals")
        
        },
    }
}
</script>
