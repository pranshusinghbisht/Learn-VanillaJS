// Store the items added to the cart into local-storage with key as cart.

/*
API:- https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=1
- Change the page number to implement pagination. (e.g. page=2)
- There are total 4 pages only.
*/
let arr = JSON.parse(localStorage.getItem("cart")) || [];
let c = 1;
 a =   document.getElementById("next").addEventListener("click",function(){
    if(c>=1){
        c++;
    }
    if(c>4){
        c=1;
    }
        d(c)
    })


 document.getElementById("previous").addEventListener("click",function(){
    if(c>1){
        c--;
    }
    if(c<1){
        c=1;
    }
    d(c);
})
// console.log(a)
function d(z){ 
    // console.log('c-fetch:',z)

fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=${z}`).then((res)=>{
    return (res.json());
}).then((data)=>{
    display(data.data)
}).catch(function(err){
    console.log(err)
})
}
d(c)
// console.log('d:', c)

let display = (data) => {
let container = document.getElementById("items");
container.innerHTML = null;
data.forEach(el => {
    let div = document.createElement("div");
    div.setAttribute("class","item");

    let brand = document.createElement("h2");
    brand.innerText = el.brand;

    let image = document.createElement("img");
    image.src = el.image;
    
    let price = document.createElement("p");
    price.innerText = el.price;

    let btn = document.createElement("button");
    btn.innerText = "add to cart";
    btn.setAttribute("class","add_to_cart");
    btn.addEventListener("click",function(){
        arr.push(el);
        console.log('arr:', arr.length)
        document.getElementById('cart_count').innerText = arr.length;
        localStorage.setItem("cart",JSON.stringify(arr))
    })

    div.append(brand,image,price,btn);
    container.append(div);
});
}


