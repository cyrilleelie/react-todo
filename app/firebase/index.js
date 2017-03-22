import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyC46IYea-BHN3oNS51m7RZlYkRZaQnRfKs",
    authDomain: "cyrille-todo-app.firebaseapp.com",
    databaseURL: "https://cyrille-todo-app.firebaseio.com",
    storageBucket: "cyrille-todo-app.appspot.com",
    messagingSenderId: "992216711795"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
