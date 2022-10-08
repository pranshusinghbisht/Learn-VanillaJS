submit = document.getElementById("submit");
let arr = JSON.parse(localStorage.getItem("signup")) || [];

submit.addEventListener("click", function (e) {
e.preventDefault();
    
let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let name = `${firstName} ${lastName}`;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let setPassword = document.getElementById("setPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let obj = {
        name,
        email,
        phoneNumber,
        password: confirmPassword,
    }

    if (obj.email == "" || obj.setPassword == "" || obj.password == "") {
        alert("Invalid Details")
    }
    else if(setPassword === confirmPassword) {
        arr.push(obj);
        localStorage.setItem("signup", JSON.stringify(arr));
        alert("SignUp Successfully")
        window.location.href="./login.html"
    }
    else{
        alert("Password is not match")
    }
    // console.log(arr)

})