import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDgdRumdh4ODcCIX8jqkZclW6YqNNKXGLw",
    authDomain: "todoapplic.firebaseapp.com",
    projectId: "todoapplic",
    storageBucket: "todoapplic.appspot.com",
    messagingSenderId: "405552857285",
    appId: "1:405552857285:web:fa7d3ac5198bc8207470ac"
  };


  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export { db };