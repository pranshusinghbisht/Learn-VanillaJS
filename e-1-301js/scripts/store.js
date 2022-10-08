

    let data  = JSON.parse(localStorage.getItem("mobile_data"));
let appendData = () => {
    document.getElementById("mobile_list").innerHTML = null;
    data.forEach(function(el,index){
        let div = document.createElement("div");
        div.setAttribute("class","mobile")
        let image = document.createElement("img");
        image.src = el.image;
        
    let brand = document.createElement("h1");
    brand.innerText = el.brand;
    
    let name = document.createElement("h2");
    name.innerText = el.name;

    let price = document.createElement("h2")
    price.innerText = el.price;

    let button = document.createElement("button");
    button.innerText="remove"
    button.setAttribute("class","remove");
    button.addEventListener("click",function(){
        remov(index)
    })

    div.append(image,brand,name,price,button);
    document.getElementById("mobile_list").append(div);
    });
    }


appendData();

let remov = (i) => {
    // let data = JSON.parse(localStorage.getItem("mobile_data")) 
    data.splice(i,1);
    localStorage.setItem("mobile_data",JSON.stringify(data));
    appendData()
}