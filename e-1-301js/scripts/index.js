/*
Use local storage as your database. And store data with key as "mobile_data". The mobile object will be :-
{
brand: String,
name: String,
price: Number,
image: String
}

Example:- 
{
brand: "apple", (oneplus/nokia)
name: "Iphone 13",
price: 74000,
image: "https://www.iphone.com/image.jpg"
}

*/

let arr = JSON.parse(localStorage.getItem("mobile_data"))||[];

submit = () => {
    let brand = document.getElementById("mobile_brand").value;

    let name = document.getElementById("mobile_name").value;

    let price = document.getElementById("mobile_price").value;

    let image = document.getElementById("mobile_image").value;

    let obj = {
        brand,
        name,
        image
    }

    obj["price"] = +price;

    arr.push(obj);
    // console.log('obj:', obj)
    console.log('arr:', arr)

    localStorage.setItem("mobile_data",JSON.stringify(arr));



} 
