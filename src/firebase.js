import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyBSDaO7RwSqo27vubs9bTqCYc70eKlRzCs",
    authDomain: "techlaw2019-66510.firebaseapp.com",
    databaseURL: "https://techlaw2019-66510.firebaseio.com",
    projectId: "techlaw2019-66510",
    storageBucket: "techlaw2019-66510.appspot.com",
    messagingSenderId: "620415648092",
    appId: "1:620415648092:web:b2a8a1288888d2c1"
});

export const db = firebaseApp.database()
export const storage = firebaseApp.storage()
export const auth = firebaseApp.auth()
export const msg = firebaseApp.messaging()
