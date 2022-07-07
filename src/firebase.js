import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyA4dbdm-Nzxe4YOORT934W6C7FtpDS7re0",
    authDomain: "auth-with-style-dev.firebaseapp.com",
    projectId: "auth-with-style-dev",
    storageBucket: "auth-with-style-dev.appspot.com",
    messagingSenderId: "442079702098",
    appId: "1:442079702098:web:1834e5074de934b35dc38b"
})


export const auth = app.auth()
export default app















