submit = document.getElementById("signIn");
let arr = JSON.parse(localStorage.getItem("signup")) || [];
let arrUser = JSON.parse(localStorage.getItem("loginDatabase")) || [];
console.log('arrUser:', arrUser)
console.log('arr:', arr)

submit.addEventListener("click", function (e) {
    e.preventDefault();

    let email = document.getElementById('eml').value;
    let password = document.getElementById("psd").value;

    if (arr.length === 0) {
        alert("No User Found");
        return;
    }

    let obj = {

        email,
        password,

    }

    let isLogedin = false;
    arr.forEach(function (ele) {

        if (ele.email === obj.email && ele.password === obj.password) {
            isLogedin = true;

            localStorage.setItem("Login", JSON.stringify(ele));
            // console.log("ele:", ele)

            alert("Log in Successful");

            var time = new Date();
            ele["time"] = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

            arrUser.push(ele);
            localStorage.setItem("loginDatabase", JSON.stringify(arrUser))
            window.location.href = "./index.html"
        }

    })

    if (isLogedin === false) {
        alert("User Doesn't Exist");
    }

})

let adminLogin = () => {
    localStorage.setItem("Login", true);
    window.location.href = "./index.html"
}