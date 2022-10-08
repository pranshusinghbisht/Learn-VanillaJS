let arrTrousers = JSON.parse(localStorage.getItem("trousers"))||[];
let arrShoes = JSON.parse(localStorage.getItem("shoes"))||[];;
let arrTshirts = JSON.parse(localStorage.getItem("t-shirts"))||[];;
let addProduct = () => {
    let category = document.getElementById('product-category').value;
    let productName = document.getElementById('product-name').value;
    let productImage = document.getElementById('product-img').value;
    let productDetails = document.getElementById('product-details').value;

    let obj = {
        category,
        productName,
        productImage,
        productDetails
    }

    if(obj.category === "trousers"){
        arrTrousers.push(obj)
        localStorage.setItem("trousers",JSON.stringify(arrTrousers));
    }
    else if(obj.category === "shoes"){
        arrShoes.push(obj);
        localStorage.setItem("shoes",JSON.stringify(arrShoes));
    }
    else if(obj.category === "t-shirts"){
        arrTshirts.push(obj);
        localStorage.setItem("t-shirts",JSON.stringify(arrTshirts));
    }
}