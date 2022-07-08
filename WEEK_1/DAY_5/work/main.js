let Username;
let Password;

function login(){
    Username=document.getElementById("Username").value;
    Password=document.getElementById("Password").value;

    if((Username=="pratibha") && (Password=="piu")){
        alert("login successful")
    }
    else{
        alert("Login unsuccessful")
    }
}