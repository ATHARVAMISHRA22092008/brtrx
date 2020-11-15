import firebase from "firebase";
require("@firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyBy_qj1f7Y1YlT1UCbGZ8mQGpaXCCG7u7U",
    authDomain: "booksanta-8fa79.firebaseapp.com",
    databaseURL: "https://booksanta-8fa79.firebaseio.com",
    projectId: "booksanta-8fa79",
    storageBucket: "booksanta-8fa79.appspot.com",
    messagingSenderId: "497169244669",
    appId: "1:497169244669:web:418db4da15566fbcd47994"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();

  
