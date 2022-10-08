let container = document.getElementById('container');
let Data = JSON.parse(localStorage.getItem("shoes"))
console.log('Data:', Data)

let appendData = () => {
    Data.forEach(({productName,productImage,productDetails}) => {
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        h2.innerText = productName;

        let img = document.createElement('img');
        img.src = productImage;

        let p = document.createElement('p');
        p.innerText = productDetails;

        div.append(h2,img,p);
        container.append(div);
    });
}
appendData();