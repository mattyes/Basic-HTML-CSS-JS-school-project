function ShowOnlineFriends() {
  var x = document.getElementById("online-users");
  var a = document.getElementById("chat-view");
  if (x.style.display === "none") {
    x.style.display = "block";
    a.style.display = "none";
  } else {
    x.style.display = "block";
    a.style.display = "none";
  }
}

// Add an event listener
let myDivs = document.getElementsByClassName("user-item");
let chatView = document.getElementById("chat-view");
let onlineUsers = document.getElementById("online-users");


// Loop through all elements with the class "user-item"
for (let i = 0; i < myDivs.length; i++) {
  myDivs[i].addEventListener("click", function () {
    chatView.style.display = "block";
    onlineUsers.style.display = "none";
  });
}

function addFriendOverlay() {
  var x = document.getElementById("addFriendOverlay");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
