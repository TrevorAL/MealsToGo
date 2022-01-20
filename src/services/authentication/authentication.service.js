import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as firebase from "firebase";



// export const loginRequest = (email, password) =>
//     signInWithEmailAndPassword( getAuth(), email, password) ;

    export const loginRequest = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

