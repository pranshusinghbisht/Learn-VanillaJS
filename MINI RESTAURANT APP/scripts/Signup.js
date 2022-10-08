//https://github.com/masai-school/api-mocker/wiki/Authentication-API

let register = async () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let username = document.getElementById("mobile").value;
    let mobile = document.getElementById("desc").value;
    let description = document.getElementById("desc").value;

    let formData = {name,email,username,password,mobile,description}
    console.log('formData:', formData)


            let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/register',{
                method: "POST",
                body: JSON.stringify(formData),
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                }
            }) 
            let data = await res.json();
            console.log('data:', data)
        
        }