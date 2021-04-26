  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDLJGV5xPFsRb6eB1rxCeykUGnPWuSUw-A",
    authDomain: "prasun-das.firebaseapp.com",
    databaseURL: "https://prasun-das.firebaseio.com",
    projectId: "prasun-das",
    storageBucket: "prasun-das.appspot.com",
    messagingSenderId: "747236950376",
    appId: "1:747236950376:web:5aaf9a8ecb967547d756dd",
    measurementId: "G-V80B4YFV96"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var database = firebase.database();

console.log(database);



    


//Write data to database

function writeUserData() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('text').value;
    database.ref('messages/').push().set({
        message : text,
        name: name,
        email: email
    });
  }