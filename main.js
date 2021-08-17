function login(){
    var username = document.getElementById("user_input").value;
    localStorage.setItem("user_name",username);
    window.location="sunday.html"; 
}