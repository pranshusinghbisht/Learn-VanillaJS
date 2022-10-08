let container = document.getElementById("container");
let data = JSON.parse(localStorage.getItem("cart"))
let display = (arr) => {
    
    container.innerHTML = null;
    arr.forEach(({name,image,price},index) => {
        let div = document.createElement("div");
        let nam = document.createElement("h1");
        nam.innerText = `Food: ${name}`;
        
        let img = document.createElement("img");
        img.src = image;
        
        let pr = document.createElement("p");
        pr.innerText = `Price: ${price}`;
        
        let btn = document.createElement("button");
        btn.innerText = "Remove";
        btn.addEventListener("click",function(){
            remove(index);
        })
        
        div.append(nam,img,pr,btn);
        container.append(div);
    });
}

display(data);
    function remove(i){
        let bag = JSON.parse(localStorage.getItem("cart")) || [];
        bag.splice(i,1);
        localStorage.setItem("cart",JSON.stringify(bag));
        display(bag)
        location.reload()
    }

