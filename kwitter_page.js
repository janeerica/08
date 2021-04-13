//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCSCyJXHfWmj17GMAI_7Qv2LjmcExCkfxo",
      authDomain: "coronavirus-rbxi.firebaseapp.com",
      databaseURL: "https://coronavirus-rbxi-default-rtdb.firebaseio.com",
      projectId: "coronavirus-rbxi",
      storageBucket: "coronavirus-rbxi.appspot.com",
      messagingSenderId: "596515754697",
      appId: "1:596515754697:web:1319a0eb93eea102167318",
      measurementId: "G-B11HYW70QM"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout (){
      localStorage.removeItem("room_name")
      localStorage.removeItem("user_name")
      window.location="index.html"
}
var user_name=localStorage.getItem("username")
var room_name=localStorage.getItem("room_name")
function send(){
      msg=document.getElementById("msg").value 
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value="";
}