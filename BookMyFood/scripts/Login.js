let login = async () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let userData = {username, password};
    try{
        let res = await fetch('https://masai-api-mocker.herokuapp.com/auth/login', {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        res = await res.json();
        console.log('res:', res)

        localStorage.setItem("Login",true)
    }
    catch{
        localStorage.setItem("Login",false)
    }

    getProfile(username,res.token);
}

let getProfile = async (username, token) => {
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    res = await res.json();
    console.log(res)
};
async function main() {
    try {
        let res = await fetch(`URL`) 
        let data = await res.json();
        display(data)
    }
    catch (err) {
        console.log('err:', err)
    }
}