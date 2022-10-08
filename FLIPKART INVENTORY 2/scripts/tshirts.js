fetch(`https://aqueous-island-33964.herokuapp.com/api/products?category=tshirt`).then((res) => {
    return (res.json());
}).then((data) => {
    // console.log(data);
    display(data)
}).catch(function (err) {
    console.log(err)
})

let display = (data) => {
    let container = document.getElementById("container");
    container.innerHTML = null;
    data.forEach(({ productImage, productName, category, productPrice, productDetails }) => {
        let div = document.createElement("div");
        let i = document.createElement("img");
        i.src = productImage;
        let n = document.createElement("h3");
        n.innerText = `Name: ${productName}`
        let c = document.createElement("p");
        c.innerText = `Category: ${category}`
        let p = document.createElement("p");
        p.innerText = `Price: ${productPrice}`
        let d = document.createElement("p");
        d.innerText = `Details: ${productDetails}`

        div.append(i,n,c,p,d)
        container.append(div)
    });
}