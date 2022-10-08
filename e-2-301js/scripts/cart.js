let count_items = document.getElementById("cart_count");

let arr = JSON.parse(localStorage.getItem("cart")) || [];
console.log('arr:', arr)

count_items.innerText = arr.length;


let display = (arr) => {
    let container = document.getElementById("items");
    container.innerHTML = null;
    arr.forEach((el,index) => {
        let div = document.createElement("div");
        div.setAttribute("class","item");
    
        let brand = document.createElement("h2");
        brand.innerText = el.brand;
    
        let image = document.createElement("img");
        image.src = el.image;
        
        let price = document.createElement("p");
        price.innerText = el.price;
    
        let btn = document.createElement("button");
        btn.innerText = "remove";
        btn.setAttribute("class","remove");
        btn.addEventListener("click",function(){
            remove(index);
        })
    
        div.append(brand,image,price,btn);
        container.append(div);
    });
    }
    display(arr);

    function remove(i){
        let bag = JSON.parse(localStorage.getItem("cart")) || [];
        bag.splice(i,1);
        localStorage.setItem("cart",JSON.stringify(bag));
        display(bag)
        location.reload()
    }

    let submit = () => {
        let name = document.getElementById("name").value;
        let address = document.getElementById("address").value;
        alert(`${name}, your order is successfull!`)     
    }