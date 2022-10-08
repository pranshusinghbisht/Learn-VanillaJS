
let arr  = JSON.parse(localStorage.getItem("users")) || [];

let submit = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let obj = {name, email, password};
    arr.push(obj);
    console.log('arr:', arr)
    localStorage.setItem("users",JSON.stringify(arr))

}