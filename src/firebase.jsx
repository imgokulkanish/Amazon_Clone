import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyAqT4OXBtCTXsO4qDYooH3enAqQdOE9hcE",
    authDomain: "onecart-c2cc6.firebaseapp.com",
    projectId: "onecart-c2cc6",
    storageBucket: "onecart-c2cc6.appspot.com",
    messagingSenderId: "547949283201",
    appId: "1:547949283201:web:1aeb4e98313d540018ca80"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth()
export { auth } 