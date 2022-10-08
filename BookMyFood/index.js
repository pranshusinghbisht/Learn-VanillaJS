import {navbar} from './components/navbar.js';
document.getElementById("nav").innerHTML = navbar();

import {data} from './components/foodData.js'
console.log('data:', data)

let arr = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("numItem").innerText= arr.length;

let Login = localStorage.getItem("Login");


data.forEach(({name,image,price},el) => {
    let div = document.createElement("div");
    let nam = document.createElement("h1");
    nam.innerText = `Food: ${name}`;
    
    let img = document.createElement("img");
    img.src = image;

    let pr = document.createElement("p");
    pr.innerText = `Price: ${price}`;

    let btn = document.createElement("button");
    btn.innerText = "Add to cart";
    btn.addEventListener("click",function(){
        arr.push({name,image,price});
        console.log('arr:', arr)
        document.getElementById("numItem").innerText= arr.length;
        localStorage.setItem("cart",JSON.stringify(arr))
    })

    div.append(nam,img,pr,btn);
    document.getElementById("container").append(div);
});

let Checkout = document.getElementById("Checkout");
Checkout.addEventListener("click",function(){
    if(Login == 'false'){
        alert("Please Login First")
    }
    else if(Login == null){
        alert("Please Login First")
    }
    else{
        window.location.href="./Checkout.html"
    }
})

