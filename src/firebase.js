 import firebase from 'firebase/app'
 import 'firebase/auth'



   var firebaseConfig = {
    apiKey: "AIzaSyB4v9FvkUuYJPZJAoDmr58kUK8zqU10hCk",
    authDomain: "dev-auth-492d3.firebaseapp.com",
    projectId: "dev-auth-492d3",
    storageBucket: "dev-auth-492d3.appspot.com",
    messagingSenderId: "14970329354",
    appId: "1:14970329354:web:faa62b179da2f35bb282f3"
  };
  // Initialize Firebase
  

const app =firebase.initializeApp(firebaseConfig);


export const auth = app.auth()
export default app