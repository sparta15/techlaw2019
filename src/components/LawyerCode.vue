<template>
    <!-- for create <p> -->
    <div class="container">
        <lawyer-navbar class="mt-3 mb-3"></lawyer-navbar>
        <h2>Código de conducta</h2>
        {{ articles }}
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
            articles: ""
        }
    },
    firebase: {
        articles: {
        source: db.ref("articles"),
        },
        proposals: {
        source: db.ref("proposals"),
        asObject: false,
            readyCallback: function() {
            this.getProposals()
        }
        }
    },
    methods: {
        getProposals() {

            db.ref("proposals").on("value", (snapshot) => {
                let obj = snapshot.val();
                let result = Object.keys(obj)

                this.articles = result.map(function (index) {
                    db.ref("lawyers").on("value", (snapshot) => {
                        let objlawyers = snapshot.val();
                        let resultlawyers = Object.keys(objlawyers)
                             db.ref("lawyers").child("numberoflawyers").set(resultlawyers.length)
                        }, function (errorObject) {
                        console.log(errorObject);
                    });
                    db.ref("lawyers").child("numberoflawyers").on("value", (snapshot) => {
                        let numberoflawyers = snapshot.val()
                            // Si el numero de votos de una propuesta supone por lo menos la mitad 50% de abogados de la plataforma, el artículo se añade al código de conducta
                          if(obj[index].numberofvotes/numberoflawyers >= 0.5) {
                                  db.ref("articles").push(obj[index])
                        }
                        }, function (errorObject) {
                        console.log(errorObject);
                    });
                     
                        return obj[index].description

                });

                }, function (errorObject) {
                console.log(errorObject);
            });
        }
    }
    
}
</script>