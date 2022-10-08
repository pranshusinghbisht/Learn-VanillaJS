
let url = "https://aqueous-island-33964.herokuapp.com/api/products";

let addProduct = async() => {
    
    let productName = document.getElementById('product-name').value;
    let productImage = document.getElementById('product-img').value;
    let productDetails = document.getElementById('product-details').value;
    let category = document.getElementById("category").value;
    let productPrice = document.getElementById("product-price").value;

    let obj = {
        productName, category, productImage, productDetails, productPrice
    }
    console.log('obj:', obj)

    try {
        let res = await fetch(url,{
            method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': "application/json",
        },
        }) 
        let data = await res.json();
        console.log('data:', data)
    }
    catch (err) {
        console.log('err:', err)
    }

}