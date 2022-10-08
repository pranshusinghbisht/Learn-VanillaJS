let UserDetails = document.getElementById("UserDetails");
let Login = JSON.parse(localStorage.getItem("Login"));

if(Login !== null){
if(Login === true){
UserDetails.innerHTML = null;
    adminLogin();

}
else{
    
    UserDetails.innerHTML = null;
    userLogin();

}

    
function adminLogin(){

let Login_User = document.createElement("h1");
Login_User.innerHTML=`Login User`;
let admin = document.createElement("h3");
admin.innerHTML =`Admin`;
let signout = document.createElement("button");
signout.innerText = "Sign Out";
signout.setAttribute("onclick","signOutAdmin()")

UserDetails.append(Login_User,admin,signout)

}

function userLogin(){
let UserDetails = document.getElementById("UserDetails");
// console.log('userLogin:', userLogin)
let Login_User = document.createElement("h1");
Login_User.innerHTML=`Login Type`;
let name = document.createElement("h3");
name.innerHTML =`Name: ${Login.name}`;
let email = document.createElement("h3");
email.innerHTML = `Email: ${Login.email}`;

let phoneNumber = document.createElement("h3");
phoneNumber.innerHTML = `Phone Number: ${Login.phoneNumber}`;

let signOutUser = document.createElement("button");
signOutUser.innerText = "Sign Out";
    signOutUser.setAttribute("onclick","signOutUser()")

UserDetails.append(Login_User,name,email,phoneNumber,signOutUser)
}
}
// addProduct page access 
let addProduct = document.getElementById("addProduct");
addProduct.addEventListener("click",function(){
    if(Login === true){
        window.location.href="./AdminPage.html"
    }
    else{
        alert("User Can't Access");
    }
})



//storepage
let storePage = document.getElementById("storePage");
storePage.addEventListener("click",function(){
    if(Login === null){
        alert("Please Login First")
    }
    
    else{
        window.location.href="./menuPage.html"
        console.log('"Please Login First":', "Please Login First")
    }
})

let signOutUser = () => {
alert("sign out successfully");
UserDetails.innerHTML = null;
localStorage.removeItem('Login');

}

let signOutAdmin = () => {
alert("sign out successfully");
UserDetails.innerHTML = null;
localStorage.removeItem('Login');

}