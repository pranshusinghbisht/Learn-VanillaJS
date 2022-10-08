let submit_btn=document.getElementById("submit");
submit_btn.onclick=()=>{
    login();
};
let login =async()=>{
    let user_data={
        password:document.getElementById("password").value,
        username:document.getElementById("username").value,
    };

let res=await fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
    method:"POST",
    body:JSON.stringify(user_data),
    headers:{
        "Content-Type":"application/json",
    },
});

let data=await res.json(); //Token

saveUser(user_data.username, data.token, 60000);
console.log(res);
console.log(data);
};

let saveUser=(username,token, time)=>{
    let user={
        username,
        token,
    };

localStorage.setItem("user_details",JSON.stringify(user));

setTimeout(() => {
    localStorage.setItem("user_details",JSON.stringify(null));
}, time);
};