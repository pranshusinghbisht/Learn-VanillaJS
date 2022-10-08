let submit = () => {
    let arr = JSON.parse(localStorage.getItem("users"));

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let obj = { email, password};

    arr.forEach(el => {
        if(el.email === obj.email && el.password === obj.password){
            isLogin = true;
            alert("Login successful!");
            localStorage.setItem("login",true);
            window.location.href = './checkout.html'
        }
        else if(el.password !== obj.password){
            alert("Wrong credentials")
        }
        else if(el.email !== obj.email ){
            alert("User doesn't exist, Sign Up")
        }
    });

}