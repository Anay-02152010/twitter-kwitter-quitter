var firebaseConfig = {
  apiKey: "AIzaSyCHx7x4lFYsSR-lrvBUi56v9igXrcarz30",
  authDomain: "kwitter-project-6a3ed.firebaseapp.com",
  databaseURL: "https://kwitter-project-6a3ed-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-6a3ed",
  storageBucket: "kwitter-project-6a3ed.appspot.com",
  messagingSenderId: "564727241060",
  appId: "1:564727241060:web:f462903b4bdded29498271",
  measurementId: "G-6ZF5F3480P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem(user_name);

  document.getElementById(user_name).innerHTML = "Welcome " + user_name + "!";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    firebase.database().firebaseConfig("/").child(room_name).update({
      purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML})};
  Room_names = childkey;
  //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";  
}

  firebase.analytics();