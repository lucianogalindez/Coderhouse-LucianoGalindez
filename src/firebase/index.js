import firebase from 'firebase'
import '@firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDTra0wdyd_QIRQyn1b-ia7gbUkc4PR7L0",
    authDomain: "animate-ecommerce.firebaseapp.com",
    projectId: "animate-ecommerce",
    storageBucket: "animate-ecommerce.appspot.com",
    messagingSenderId: "845402700551",
    appId: "1:845402700551:web:63ec3ec1747ab3c2f4e3a2"
});

export const getFirebase = () => {
    return app
}

export const getFirestore = () => {
    return firebase.firestore(app)
}