var firebaseConfig = {
    apiKey: "AIzaSyDTIQ2LkDrbrNC2GmgxLUp1eDk_YUHmA8U",
    authDomain: "kwitter-4b4e0.firebaseapp.com",
    databaseURL: "https://kwitter-4b4e0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kwitter-4b4e0",
    storageBucket: "kwitter-4b4e0.appspot.com",
    messagingSenderId: "737516026597",
    appId: "1:737516026597:web:0c87f4fe2ec5169862b20c",
    measurementId: "G-EKV08DEQRL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
