let arr = JSON.parse(localStorage.getItem("Products"))||[];

let addProduct = () => {
    
    let productName = document.getElementById('product-name').value;
    let productImage = document.getElementById('product-img').value;
    let productDetails = document.getElementById('product-details').value;

    let obj = {
        productName,
        productImage,
        productDetails
    }

    arr.push(obj)
    localStorage.setItem("Products",JSON.stringify(arr));
    // console.log('arr:', arr)
    if(obj.productName === "" || obj.productImage === "" || obj.productDetails === ""){
        alert("Fill Complete Product Details")
    }else{
        alert("Product Add Successfully")
    }
}