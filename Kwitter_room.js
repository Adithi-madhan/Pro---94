// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCdvaxyDgY6UBBeVqJcrfB4mYiH94WzfIo",
    authDomain: "project-94-901d5.firebaseapp.com",
    databaseURL: "https://project-94-901d5-default-rtdb.firebaseio.com",
    projectId: "project-94-901d5",
    storageBucket: "project-94-901d5.appspot.com",
    messagingSenderId: "963130081956",
    appId: "1:963130081956:web:680c467328762c5742dc31"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function add_room() {

     room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        age : "11"
    });
}

function add_room() {
    user_name = document.getElementById("add_room").value;
    localStorage.setItem("add_room",add_room);
    window.location = "kwitter_room.html";
  
  }


  function logout() {

    window.location = "index.html";
  }