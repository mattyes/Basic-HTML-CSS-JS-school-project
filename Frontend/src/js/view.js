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