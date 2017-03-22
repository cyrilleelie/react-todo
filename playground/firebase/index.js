import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyC46IYea-BHN3oNS51m7RZlYkRZaQnRfKs",
  authDomain: "cyrille-todo-app.firebaseapp.com",
  databaseURL: "https://cyrille-todo-app.firebaseio.com",
  storageBucket: "cyrille-todo-app.appspot.com",
  messagingSenderId: "992216711795"
};

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Cyrille',
    age: 35
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

var newTodoRef = todosRef.push({
  text: 'Walk the dog!'
});

var newTodoRef = todosRef.push({
  text: 'Film some movies'
});
