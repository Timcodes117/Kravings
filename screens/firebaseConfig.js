
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBS1jm_2rY4jwpm9OJKHF5WL2uHoDUD9QI",
  authDomain: "kravings-19867.firebaseapp.com",
  projectId: "kravings-19867",
  storageBucket: "kravings-19867.appspot.com",
  messagingSenderId: "778714201062",
  appId: "1:778714201062:web:3119ad2f7baeb0c3eb3427"
};

// Initialize Firebase
let app ;

if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app()
}

const auth = firebase.auth()
const db = app.firestore()
export { auth, db };