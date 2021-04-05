import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAVQ3hreG_qn-Spb1qRcR-0f4akT9w6Jq4",
  authDomain: "wily-app-b2844.firebaseapp.com",
  projectId: "wily-app-b2844",
  storageBucket: "wily-app-b2844.appspot.com",
  messagingSenderId: "325661862435",
  appId: "1:325661862435:web:97cf40b81ced26549d1f96",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
