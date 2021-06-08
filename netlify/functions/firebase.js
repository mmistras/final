const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBObVYnR5f0M4yRY7EEWuDaKDm0c8OjNIk",
  authDomain: "kiei-451-3b652.firebaseapp.com",
  projectId: "kiei-451-3b652",
  storageBucket: "kiei-451-3b652.appspot.com",
  messagingSenderId: "361745139019",
  appId: "1:361745139019:web:584f274060daf4f97014ce"
}; // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase