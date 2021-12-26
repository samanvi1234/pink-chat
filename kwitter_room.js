
var firebaseConfig = {
      apiKey: "AIzaSyC9HcyeYX4TXWMU3EmUOCMwW8FyRVdUWao",
      databaseURL:"https://samanvitwitter-default-rtdb.firebaseio.com",
      authDomain: "samanvitwitter.firebaseapp.com",
      projectId: "samanvitwitter",
      storageBucket: "samanvitwitter.appspot.com",
      messagingSenderId: "624717570953",
      appId: "1:624717570953:web:43ecfa44e87e69b669f758"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

