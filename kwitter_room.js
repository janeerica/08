
//ADD YOUR FIREBASE LINKS HERE
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name'onclick='redirectToRoomName(this.id)' id="+Room_names+">#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row
console.log("printingroomname"+Room_names)
      //End code
      });});}
getData();
function addroom (){
      room_name=document.getElementById("room_name").value ;
firebase.database().ref("/").child(room_name).update({
purpose:"adding roomname"
})
localStorage.setItem("room_name",room_name)
window.location="kwitter_page.html"
}
user_name=localStorage.getItem("username")
document.getElementById("user_name").innerHTML="welcome "+user_name+"!"
function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}
function logout (){
      localStorage.removeItem("room_name")
      localStorage.removeItem("user_name")
      window.location="index.html"
}