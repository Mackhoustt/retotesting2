import firebase from 'firebase/app' // npm i firebase

import 'firebase/firestore'  //Firestore trae la configuración al proyecto 

import 'firebase/auth' //Autenticar al usuario con google o correo en este caso :3



const firebaseConfig = {
    apiKey: "AIzaSyBRsK4ywbWaFAGZcBPtailjXAUrCos4x3I",
    authDomain: "newpaper-bcbd7.firebaseapp.com",
    projectId: "newpaper-bcbd7",
    storageBucket: "newpaper-bcbd7.appspot.com",
    messagingSenderId: "844330484",
    appId: "1:844330484:web:febbbb2e48bb046212f5a1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Manera de conectarnos a la base de datos
const basefires = firebase.firestore()

//Autenticacion de google ---- muy importante se crea es una nueva instancia !!
const google = new firebase.auth.GoogleAuthProvider()

export{
    firebase,
    basefires,
    google,
}